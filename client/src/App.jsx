import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Docs from "./pages/Docs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;
