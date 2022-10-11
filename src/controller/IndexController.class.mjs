export default class IndexController {
  constructor() {}

  getPage(request, response, next) {
    let view = "indexView",
      data = ["one", "two", "three"];

    response.status(200).render(view, { data: data });

    return true;
  }
}

