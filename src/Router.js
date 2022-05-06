export default class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(name, location) {
    this.routes[name] = location;
  }

  changePage(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, '', event.target.href);

    this.insertPageContent();
  }

  async insertPageContent() {
    const { pathname } = window.location;
    const pageRoute = this.routes[pathname] || this.routes[404];

    try {
      const fetchPage = await fetch(pageRoute);
      if (!fetchPage.ok) {
        throw new Error(`HTTP error: ${fetchPage.status}`);
      }
      const pageContent = await fetchPage.text();

      return (document.getElementById('page-content').innerHTML = pageContent);
      //
    } catch (error) {
      document.getElementById('page-content').innerHTML = pageRoute;
      console.log(error);
    }
  }
}
