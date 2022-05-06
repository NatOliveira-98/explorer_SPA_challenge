import Router from './Router.js';

const routes = new Router();

routes.addRoute('/', './pages/home.html');
routes.addRoute('/universe', './pages/universe.html');
routes.addRoute('/exploration', './pages/exploration.html');
routes.addRoute(404, './pages/404.html');

routes.insertPageContent();
window.changePage = () => routes.changePage();
window.onpopstate = () => routes.insertPageContent();
