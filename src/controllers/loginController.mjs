import { response } from "express";

// Funktionaler Ansatz

const getLoginData = (request, response, next) => {
    const view = "loginView";
    const data = { myData: undefined };
    // render von express:
    // 1. Name eines Templates
    // 2. Daten, die an das Template übergeben werden
    response.status(200).render(view, data);
    return true;
};

const showLoginData = (request, response, next) => {

    console.log(request.body);
    // console.log(request.query);
    // console.log(request.params);

    request.body.email = "michael@gfu.net";
    request.body.password = "geheim";
    // SELECT * FROM users WHERE email = request.body.email AND password = request.body.password

    const data = { myData: { name: "Michael", lastLogin: "24.12.2023" } };
    const view = "loginView";
    response.status(200).render(view, data);
    return true;
};

const deletLoginData = (request, response, next) => { };

export { getLoginData, showLoginData };
