import { Link } from "react-router-dom";
import tbilisi from "../../../assets/test.jpg";
import "./Trip.css";
import TripDetail from "./TripDetail";
import TripPlan from "./TripPlan";
import { motion } from "framer-motion";

const Trip = () => {
  return (
    <>
      <motion.div
        className="trip-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opaity: 0 }}
      >
        <div
          className="trip-heading"
          style={{
            background: `url(${tbilisi})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            padding: "150px 20px 170px 20px",
          }}
        >
          <Link to="/">
            <h2 className="trip-nav">Home</h2>
          </Link>
          <h2 className="trip-header">Tbilisi, Georgia</h2>
        </div>

        <TripDetail />
        <TripPlan />
      </motion.div>
    </>
  );
};

export default Trip;
