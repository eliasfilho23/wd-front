import "./App.css";
import { Home } from "./features/Home";
import { NewBook } from "./features/NewBook";
import { BookPage } from "./features/BookPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EditBookPage } from "./features/EditBookPage";
import { DeleteBookPage } from "./features/DeleteBookPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newBook' element={<NewBook />} />
          <Route path='/:id' element={<BookPage />} />
          <Route path='/:id/edit' element={<EditBookPage />} />
          <Route path='/:id/delete' element={<DeleteBookPage />} />

          {/* <Route path="/edit/:bookTitle" element={<Ed />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
