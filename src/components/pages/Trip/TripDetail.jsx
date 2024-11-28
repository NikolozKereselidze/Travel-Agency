import { DestinationsContext } from "../../AnimatedRoutes";
import { useContext } from "react";

const TripDetail = () => {
  const { destination } = useContext(DestinationsContext);

  return (
    <div className="trip-detail">
      <div className="trip-price">
        <h3>
          {destination.price}
          <span> / Per Person</span>
        </h3>
        <button className="trip-book--button">Book now</button>
      </div>

      <div className="trip-overview">
        <h3>Destination Overview</h3>
        <p>{destination.description}</p>
      </div>
    </div>
  );
};

export default TripDetail;
