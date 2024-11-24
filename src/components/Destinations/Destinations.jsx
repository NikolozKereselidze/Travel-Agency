import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Destinations/Destinations.css";
import styles from "../../styles/Destinations/Destinations.module.css";
import DestinationCard from "./DestinationCard";
import SectionHeading from "../SectionHeading";

import berlin from "../../assets/destinations/berlin.webp";
import london from "../../assets/destinations/london.webp";
import venice from "../../assets/destinations/venice.webp";
import lisbon from "../../assets/destinations/lisbon.webp";
import tbilisi from "../../assets/destinations/tbilisi.webp";
import paris from "../../assets/destinations/paris.webp";

const Destinations = () => {
  const destinations = [
    { image: tbilisi, title: "Old Tbilisi", location: "Tbilisi, Georgia" },
    { image: paris, title: "Eiffel Tower", location: "Paris, France" },
    { image: berlin, title: "Monument of Berlin", location: "Berlin, Germany" },
    {
      image: london,
      title: "Milennium Bridge",
      location: "London, United Kingdom",
    },
    { image: venice, title: "Rialto Bridge", location: "Venice, Italy" },
    {
      image: lisbon,
      title: "Sea of Orange Tiles",
      location: "Lisbon, Portugal",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.destinationsSection}>
      <SectionHeading
        title="Popular Destinations"
        description="Most popular destinations around the world, from historical places to natural wonders."
      />
      <div className={styles.sliderWrapper}>
        <Slider {...settings} className={styles.carouselWrapper}>
          {destinations.map((destination, index) => (
            <DestinationCard
              key={`${destination.title}-${index}`}
              image={destination.image}
              title={destination.title}
              location={destination.location}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Destinations;
