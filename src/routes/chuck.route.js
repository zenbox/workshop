import express from "express";

export function createChuckRouter() {
    const router = express.Router();

    // Ereignis vom Browser, der sich etwas wünscht
    router.get("/", async (req, res) => {
        const data = await getRandomJokeFromAPI();
        res.json({ joke: data });
    });

    return router;
}

async function getRandomJokeFromAPI() {
    // Holt einen zufälligen Chuck-Norris-Witz von einer API
    // https://api.chucknorris.io/jokes/random
    // mit fetch
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data.value;
}
