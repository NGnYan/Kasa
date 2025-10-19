import { Link } from "react-router-dom";
import "../styles/pages/About.scss";
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import BannerImg from "../assets/Image-source-2.png";
import Footer from "../components/Footer";

function About() {
  return (
    <section>
      <header>
        <Navbar />
        <HeaderBanner img={BannerImg} />
      </header>
      <main></main>
      <Footer />
    </section>
  );
}

export default About;
