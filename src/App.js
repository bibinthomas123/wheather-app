import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Weather from "./pages/weather";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/weather" element={<Weather />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default App;
