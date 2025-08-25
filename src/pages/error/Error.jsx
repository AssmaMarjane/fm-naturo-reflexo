/**
 * Imports the necessary styles and components for the Error page.
 * - Imports the Error.scss stylesheet for styling the Error page.
 * - Imports the Link component from "react-router-dom" for navigation.
 * - Imports the useRouteError hook from "react-router-dom" for handling route errors.
 */
import "./Error.css";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

/**
 * Functional component that displays an error message for a 404 page not found error.
 * It retrieves the error message using the useRouteError hook and logs it to the console.
 * The component renders a section with a header, error message, and a link to return to the homepage.
 *
 * @component
 * @example
 * return (
 *   <Error />
 * )
 * @returns {JSX.Element} JSX element displaying the error message and a link to the homepage.
 */
function Error() {
  const error = useRouteError(); // Retrieves the route error message
  console.error(error); // Logs the error to the console

  return (
    <main>
      <div className="error-section">
        <div className="error-box">
          <h1 className="error-title">404</h1>
          <p className="error-texte">La page que vous demandez n'existe pas.</p>
          <Link to="/" className="error-link">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
