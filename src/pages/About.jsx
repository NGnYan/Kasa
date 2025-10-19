import "../styles/pages/About.scss";
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import BannerImg from "../assets/Image-source-2.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

function About() {
  return (
    <section className="about-page">
      <header>
        <Navbar />
        <HeaderBanner img={BannerImg} />
      </header>
      <main className="collapse-container">
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          text="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </main>
      <Footer title="© 2020 Kasa. All rights reserved" />
    </section>
  );
}

export default About;
