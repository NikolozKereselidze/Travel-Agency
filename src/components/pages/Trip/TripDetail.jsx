const TripDetail = () => {
  return (
    <div className="trip-detail">
      <div className="trip-price">
        <h3>
          $899<span> / Per Person</span>
        </h3>
        <button className="trip-book--button">Book now</button>
      </div>

      <div className="trip-overview">
        <h3>Destination Overview</h3>
        <p>
          The Phi Phi Islands, located in Krabi province in southern Thailand,
          are a group of six islands known for their stunning natural beauty,
          crystal-clear waters, and white sandy beaches. The two main islands,
          Koh Phi Phi Don and Koh Phi Phi Leh, are the most popular among
          tourists. Koh Phi Phi Don is the larger of the two and is home to the
          main town and beaches, while Koh Phi Phi Leh is a smaller, uninhabited
          island known for its dramatic limestone cliffs and iconic Maya Bay,
          which was made famous by the movie “The Beach.” Visitors can explore
          the islands by boat and enjoy activities such as snorkeling, diving,
          and island-hopping.
        </p>
      </div>
    </div>
  );
};

export default TripDetail;
