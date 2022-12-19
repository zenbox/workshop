export default class IndexController {
    constructor() {}
    getPage(request, response, next) {
        let view = "indexView",
            data = { list: ["one", "two", "three"] };
        response.status(200).render(view, data);
    }
}
