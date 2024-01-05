export class CustomRouter {
  constructor() {
    this._routes = new Map();
  }

  addRoute(url, method, controller) {
    const key = method.toUpperCase() + url;
    const existingController = this._routes.get(key);

    if (!existingController) {
        this._routes.set(key, controller);
    }
  }

  get routes() {
    return this._routes;
  }
}
