import "./App.css";
import { Home } from "./features/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/edit/:bookTitle" element={<Ed />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
