export default class IndexController {
  constructor() {}

  getPage(request, response, next) {
    try {
      // - - - - - - - - -
      let view = "indexView",
        data = ["one", "two", "three"];

      console.log(request.url);

      response.status(200).render(view, { data: data });
      // - - - - - - - - -
      return true;
    } catch (error) {
      // - - - - - - - - -
      console.log(error);
      // - - - - - - - - -
      return false;
    }
  }
}
