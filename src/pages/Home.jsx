import { Link } from "react-router-dom";
import "/src/styles/App.scss";
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import accommodations from "../data/accomodation.json";

function Home() {
  return (
    <section>
      <header>
        <Navbar />
        <HeaderBanner title="Chez vous, partout et ailleurs" />
      </header>
      <main className="cards-container">
        {accommodations.map((accomo) => (
          <Card key={accomo.id} title={accomo.title} cover={accomo.cover} />
        ))}
      </main>
      <footer>
        <Footer title="© 2020 Kasa. All rights reserved" />
      </footer>
    </section>
  );
}

export default Home;
