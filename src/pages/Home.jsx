import { Link } from "react-router-dom";
import "../styles/pages/Home.scss";
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import BannerImg from "../assets/Image-source-1.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import accommodations from "../data/accomodation.json";

function Home() {
  return (
    <>
      <header>
        <Navbar />
        <HeaderBanner img={BannerImg} title="Chez vous, partout et ailleurs" />
      </header>
      <main className="cards-container">
        {accommodations.map((accomo) => (
          <Card key={accomo.id} title={accomo.title} cover={accomo.cover} />
        ))}
      </main>

      <Footer title="© 2020 Kasa. All rights reserved" />
    </>
  );
}

export default Home;
