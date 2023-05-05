import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Weather from "./pages/weather";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { useLocation } from "react-router-dom";
import "../src/styles/components.css";

import SunGraph from "./components/graphs/sunGraph";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/weather" element={<Weather />} />
          <Route path="/example" element={<SunGraph sunriseTime={6.30} sunsetTime={18.40} currentTime={12.0}  />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default App;
