import "../styles/pages/Accommodation.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LightBox from "../components/LightBox";
import Collapse from "../components/Collapse";

function Accommodation() {
  return (
    <section className="accommodation-page">
      <header>
        <Navbar />
      </header>
      <main>
        <LightBox />
        <Collapse title="Description" />
        <Collapse title="Équipements" />
      </main>

      <Footer title="© 2020 Kasa. All rights reserved" />
    </section>
  );
}

export default Accommodation;
