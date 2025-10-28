import "../styles/pages/About.scss";
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import BannerImg from "../assets/Image-source-2.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import collapseData from "../data/collapseData.json";

function About() {
  return (
    <section className="about-page">
      <header>
        <Navbar />
        <HeaderBanner img={BannerImg} />
      </header>
      <main className="collapse-container">
        <div>
          {collapseData.map((item) => (
            <Collapse key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </main>
      <Footer title="© 2020 Kasa. All rights reserved" />
    </section>
  );
}

export default About;
