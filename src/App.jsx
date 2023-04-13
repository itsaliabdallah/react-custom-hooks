import { Route, Routes } from "react-router-dom";
import "./App.css";
import BooksGrid from "./components/BooksGrid";
import Header from "./components/Header";
import QueryBar from "./components/QueryBar";
import { useState } from "react";
import Home from "./pages/Home";
import Publishers from "./pages/Publishers";

function App() {
  const [publisher, setPublisher] = useState("");

  return (
    <div className="App">
      <Header title="Book Store" />
      <Routes>
        <Route
          path="/"
          element={<Home publisher={publisher} setPublisher={setPublisher} />}
        />
        <Route path="/publishers/:publisher" element={<Publishers />} />
      </Routes>
    </div>
  );
}

export default App;
