import { DestinationsContext } from "../../AnimatedRoutes";
import { useContext } from "react";

const TripPlan = () => {
  const { destination } = useContext(DestinationsContext);

  return (
    <div className="trip-plan">
      <h3>Tour Plan</h3>

      <div className="trip-plan--wrapper">
        {destination.plan.map((row, rowIndex) => (
          <div className="trip-col" key={rowIndex}>
            {row.map((item, colIndex) => (
              <div
                className={colIndex === 0 ? "trip-border" : "trip-no--border"}
                key={colIndex}
              >
                {colIndex === 0 && (
                  <i
                    className={`fa-solid fa-${destination.icons[rowIndex]}`}
                  ></i>
                )}
                <p>{item}</p>
              </div>
            ))}
          </div>
        ))}

        <div className="trip-col">
          <div className="trip-border package-border">
            <i className={`fa-solid fa-circle-plus`}></i>
            <p>Package Includes</p>
          </div>
          <div className="trip-no--border trip-package">
            {destination.benefits.map((el, i) => (
              <p key={i}>
                <i className="fa-solid fa-check"></i>
                {el}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlan;
