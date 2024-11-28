import { Suspense } from "react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedRoutes />
      </Suspense>
    </>
  );
}

export default App;
