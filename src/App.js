import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Weather from "./pages/weather";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="/weather" element={<Weather />} />
      </Route>
    </Routes>
  );
}
export default App;
