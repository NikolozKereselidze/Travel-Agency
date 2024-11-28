const TripPlan = () => {
  return (
    <div className="trip-plan">
      <h3>Tour Plan</h3>

      <div className="trip-plan--wrapper">
        <div className="trip-col">
          <div className="trip-border">
            <p>Destination</p>
          </div>
          <div className="trip-no--border">
            <p>Clear Blue Sea, Phuket, Thailand</p>
          </div>
        </div>

        <div className="trip-col">
          <div className="trip-border">
            <p>Package Included</p>
          </div>
          <div className="trip-no--border trip-package">
            <p>
              <i className="fa-solid fa-check"></i>
              Air Tickets (Round Trip)
            </p>
            <p>
              <i className="fa-solid fa-check"></i>
              Internal Transportations
            </p>
            <p>
              <i className="fa-solid fa-check"></i>
              Accommodations
            </p>
            <p>
              <i className="fa-solid fa-check"></i>
              Foods 3 Times A Day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlan;
