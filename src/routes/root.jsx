import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/error/Error.jsx";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Naturopathie from "../pages/naturopathie/Naturopathie.jsx";
import Prestations from "../pages/prestations/Prestations.jsx";
import Reflexologie from "../pages/reflexologie/Reflexologie.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Questions from "../pages/questions/Questions.jsx";
/**
 * Configuration of the router for the application.
 *
 * Uses `createBrowserRouter` from `react-router-dom` to define
 * the routes of the application. The main component `App` contains child routes:
 *
 * - `/` (Home page): Renders the `Home` component.
 * - `/employee-list` (Employee List page): Renders the `ViewEmployee` component.
 *
 * If an error occurs while rendering any route, the `Error` component will be displayed.
 *
 * @constant
 * @type {Object}
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/prestations",
        element: <Prestations />,
      },
      {
        path: "/naturopathie",
        element: <Naturopathie />,
      },
      {
        path: "/reflexologie",
        element: <Reflexologie />,
      },
      {
        path: "/faq",
        element: <Questions />,
      },

      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;

/**
 * créer deux fichier roots (un public et un admin)
dans element :
    element: <Layout />,

    redux persist

*/
