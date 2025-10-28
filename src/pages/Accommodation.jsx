import "../styles/pages/Accommodation.scss";
import { useParams, Navigate } from "react-router-dom";
import data from "../data/accommodation.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LightBox from "../components/LightBox";
import Tag from "../components/Tag";
import HostInfo from "../components/HostInfo";
import Collapse from "../components/Collapse";

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  if (!accommodation) {
    return <Navigate to="/404" />;
  }

  const {
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
    pictures,
  } = accommodation;

  return (
    <section className="accommodation-page">
      <header>
        <Navbar />
      </header>

      <main>
        <LightBox pictures={pictures} />

        <div className="accommodation-info">
          <div>
            <div className="accommodation-location">
              <h1 className="accommodation-location-title">{title}</h1>
              <p className="accommodation-location-subtitle">{location}</p>
            </div>
            <Tag tags={tags} />
          </div>

          <HostInfo name={host.name} picture={host.picture} rating={rating} />
        </div>

        <div className="accommodation-collapse">
          <Collapse title="Description" text={description} />
          <Collapse title="Équipements" text={equipments} />
        </div>
      </main>

      <Footer title="© 2020 Kasa. All rights reserved" />
    </section>
  );
}

export default Accommodation;
