import "./style/main.scss";
import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

/**
 * Main component of the Wealth Health application.
 *
 * This component serves as the primary layout for the application. It includes
 * the `Header` and `Footer` components, and utilizes the `Outlet` component from
 * `react-router-dom` to render child components based on the current route.
 *
 * @component
 * @returns {JSX.Element} The main layout of the application, including a header,
 *                        a footer, and an outlet for rendering child routes.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}


export default App
