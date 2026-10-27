const GENDER_LABELS = { female: "weiblich", male: "männlich" };

// Fester Demo-Benutzer, bis die Anmeldung in v4 kommt
const DEMO_USER_ID = 1;

// Datensatz aus der Datenbank in das Format für die Ansicht bringen
function toView(row) {
    return {
        id: row.id,
        name: row.name,
        breed: row.breed,
        age: row.age,
        gender: row.gender,
        genderLabel: GENDER_LABELS[row.gender] ?? row.gender,
    };
}

export class HerdController {
    constructor({ sheepModel, userId = DEMO_USER_ID }) {
        this.sheepModel = sheepModel;
        this.userId = userId;
    }

    // Arrow-Funktion als Feld, damit `this` beim Übergeben an Express erhalten bleibt
    list = async (req, res, next) => {
        try {
            const rows = await this.sheepModel.list(this.userId);
            console.log("Schafe geladen:", rows.length);
            const sheep = rows.map(toView);
            res.render("sheep/index", { sheep });
        } catch (err) {
            next(err);
        }
    };
}
