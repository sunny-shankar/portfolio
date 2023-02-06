import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-background text-p_text font-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;
