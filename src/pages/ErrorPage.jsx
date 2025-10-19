import "../styles/components/ErrorPage.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <section className="error-page">
      <header>
        <Navbar />
      </header>
      <main className="error-container">
        <div className="error-content">
          <h1 className="error-number">404</h1>
          <p className="error-text">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="error-link">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
      <Footer title="© 2020 Kasa. All rights reserved" />
    </section>
  );
}

export default ErrorPage;
