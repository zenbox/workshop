import sheepModel from "../models/sheepModel.js";

const breeds = new Set([
    "Merino",
    "Ouessant",
    "Texel",
    "Heidschnucke",
    "Suffolk",
    "Coburger Fuchsschaf",
]);
const sexes = new Set(["Weiblich", "Männlich"]);
const fields = ["name", "breed", "age", "sex"];

function invalid(message) {
    const error = new Error(message);
    error.status = 400;
    return error;
}

function validateSheep(body, partial = false) {
    if (!body || typeof body !== "object" || Array.isArray(body))
        throw invalid("Ungültige Eingabe");
    const data = Object.fromEntries(
        fields
            .filter((field) => field in body)
            .map((field) => [field, body[field]])
    );
    if (!partial && fields.some((field) => !(field in data)))
        throw invalid("Alle Schaffelder sind erforderlich");
    if (partial && Object.keys(data).length === 0)
        throw invalid("Mindestens ein Schaffeld ist erforderlich");
    if (
        "name" in data &&
        (typeof data.name !== "string" ||
            !data.name.trim() ||
            data.name.trim().length > 40)
    ) {
        throw invalid("Der Kosename muss 1 bis 40 Zeichen lang sein");
    }
    if ("breed" in data && !breeds.has(data.breed))
        throw invalid("Unbekannte Rasse");
    if (
        "age" in data &&
        (!Number.isInteger(data.age) || data.age < 0 || data.age > 25)
    ) {
        throw invalid("Das Alter muss eine ganze Zahl von 0 bis 25 sein");
    }
    if ("sex" in data && !sexes.has(data.sex))
        throw invalid("Unbekanntes Geschlecht");
    if ("name" in data) data.name = data.name.trim();
    return data;
}

function sheepId(request) {
    const id = Number(request.params.id);
    if (!Number.isSafeInteger(id) || id < 1)
        throw invalid("Ungültige Schaf-ID");
    return id;
}

function publish(request, event, sheep) {
    request.app.get("io")?.to(`user:${request.auth.id}`).emit(event, {
        id: sheep.id,
        name: sheep.name,
    });
}

// Lernkontext 2.2: Der Controller übersetzt HTTP in Model-Aufrufe und JSON-Antworten.
export async function index(request, response) {
    response.json(await sheepModel.list(request.auth.id));
}

export async function show(request, response) {
    const sheep = await sheepModel.find(request.auth.id, sheepId(request));
    if (!sheep)
        return response.status(404).json({ error: "Schaf nicht gefunden" });
    response.json(sheep);
}

export async function create(request, response) {
    const sheep = await sheepModel.create(
        request.auth.id,
        validateSheep(request.body)
    );
    publish(request, "sheep:created", sheep);
    response.status(201).json(sheep);
}

export async function update(request, response) {
    const sheep = await sheepModel.update(
        request.auth.id,
        sheepId(request),
        validateSheep(request.body, true)
    );
    if (!sheep)
        return response.status(404).json({ error: "Schaf nicht gefunden" });
    publish(request, "sheep:updated", sheep);
    response.json(sheep);
}

export async function duplicate(request, response) {
    const sheep = await sheepModel.duplicate(request.auth.id, sheepId(request));
    if (!sheep)
        return response.status(404).json({ error: "Schaf nicht gefunden" });
    publish(request, "sheep:created", sheep);
    response.status(201).json(sheep);
}

export async function remove(request, response) {
    const id = sheepId(request);
    const sheep = await sheepModel.find(request.auth.id, id);
    if (!sheep)
        return response.status(404).json({ error: "Schaf nicht gefunden" });
    await sheepModel.remove(request.auth.id, id);
    publish(request, "sheep:deleted", sheep);
    response.status(204).end();
}
