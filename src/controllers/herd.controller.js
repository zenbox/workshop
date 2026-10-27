const GENDER_LABELS = { female: "weiblich", male: "männlich" };
const GENDERS = Object.keys(GENDER_LABELS);

// Fester Demo-Benutzer, bis die Anmeldung in v4 kommt
const DEMO_USER_ID = 1;

// Benutzer aus der Anfrage: ?user=2 (Seite) oder Header X-User-Id (API)
function getUserId(req) {
    const id = Number(req.query.user ?? req.get("X-User-Id") ?? DEMO_USER_ID);
    return Number.isInteger(id) && id > 0 ? id : DEMO_USER_ID;
}

// Datensatz aus der Datenbank in das Format für die Ansicht bringen
function toView(row) {
    return {
        id: row.id,
        userId: row.user_id,
        ownerName: row.owner_name,
        name: row.name,
        breed: row.breed,
        age: row.age,
        gender: row.gender,
        genderLabel: GENDER_LABELS[row.gender] ?? row.gender,
    };
}

// >>>>>>>
// Eingaben prüfen und bereinigen (wird später in den Service verschoben)
function parseSheep(body = {}) {
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const breed = typeof body.breed === "string" ? body.breed.trim() : "";
    const age = body.age === "" || body.age == null ? NaN : Number(body.age);

    if (!name || name.length > 50) {
        return { error: "Name ist erforderlich (max. 50 Zeichen)." };
    }
    if (!breed || breed.length > 50) {
        return { error: "Rasse ist erforderlich (max. 50 Zeichen)." };
    }
    if (!Number.isInteger(age) || age < 0 || age > 25) {
        return { error: "Alter muss eine ganze Zahl von 0 bis 25 sein." };
    }
    if (!GENDERS.includes(body.gender)) {
        return { error: "Geschlecht ist ungültig." };
    }

    return { value: { name, breed, age, gender: body.gender } };
}

// Ungültige IDs gelten wie nicht gefundene Datensätze
function parseId(raw) {
    const id = Number(raw);
    return Number.isInteger(id) && id > 0 ? id : null;
}
// <<<<<<<

export class HerdController {
    constructor({ sheepModel, publish = () => {} }) {
        this.sheepModel = sheepModel;
        this.publish = publish;
    }

    // Arrow-Funktionen als Felder, damit `this` beim Übergeben an Express erhalten bleibt

    // GET /herd (HTML)
    list = async (req, res, next) => {
        try {
            const userId = getUserId(req);
            const rows = await this.sheepModel.listAll();
            // ! [Übergibt die aktuelle Benutzer-ID, damit Twig gültiges Client-JavaScript rendert]
            res.render("sheep/index", {
                sheep: rows.map(toView),
                currentUser: userId,
            });
        } catch (err) {
            next(err);
        }
    };

    // >>>>>>>
    // GET /herd/:id (JSON)
    get = async (req, res, next) => {
        try {
            const id = parseId(req.params.id);
            const userId = getUserId(req);
            const row = id ? await this.sheepModel.get(userId, id) : null;
            if (!row)
                return res.status(404).json({ error: "Schaf nicht gefunden." });
            res.json({ data: toView(row) });
        } catch (err) {
            next(err);
        }
    };

    // POST /herd (JSON)
    create = async (req, res, next) => {
        try {
            const userId = getUserId(req);
            const { value, error } = parseSheep(req.body);
            if (error) return res.status(422).json({ error });
            const row = await this.sheepModel.create(userId, value);
            this.publish(userId, "created", row);
            res.status(201).json({ data: toView(row) });
        } catch (err) {
            next(err);
        }
    };

    // PUT /herd/:id (vollständige Ersetzung der Fachdaten)
    update = async (req, res, next) => {
        try {
            const id = parseId(req.params.id);
            if (!id)
                return res.status(404).json({ error: "Schaf nicht gefunden." });
            const userId = getUserId(req);

            const { value, error } = parseSheep(req.body);
            if (error) return res.status(422).json({ error });
            const row = await this.sheepModel.update(userId, id, value);
            if (!row)
                return res.status(404).json({ error: "Schaf nicht gefunden." });
            this.publish(userId, "updated", row);
            res.json({ data: toView(row) });
        } catch (err) {
            next(err);
        }
    };

    // DELETE /herd/:id
    delete = async (req, res, next) => {
        try {
            const id = parseId(req.params.id);
            const userId = getUserId(req);

            const row = id ? await this.sheepModel.get(userId, id) : null;
            const deleted = row
                ? await this.sheepModel.delete(userId, id)
                : false;
            if (!deleted)
                return res.status(404).json({ error: "Schaf nicht gefunden." });
            this.publish(userId, "deleted", row);
            res.status(204).end();
        } catch (err) {
            next(err);
        }
    };
    // <<<<<<<
}
