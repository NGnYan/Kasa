import "../styles/pages/Home.scss";
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import BannerImg from "../assets/Image-source-1.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import accommodations from "../data/accommodation.json";

function Home() {
  return (
    <section>
      <header>
        <Navbar />
        <HeaderBanner img={BannerImg} title="Chez vous, partout et ailleurs" />
      </header>
      <main className="cards-container">
        {accommodations.map((accommo) => (
          <Card
            key={accommo.id}
            id={accommo.id}
            title={accommo.title}
            cover={accommo.cover}
          />
        ))}
      </main>

      <Footer title="© 2020 Kasa. All rights reserved" />
    </section>
  );
}

export default Home;
