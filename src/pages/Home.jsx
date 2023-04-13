import { useState } from "react";
import BooksGrid from "../components/BooksGrid";
import QueryBar from "../components/QueryBar";

const Home = ({ publisher, setPublisher }) => {
  const [query, setQuery] = useState("quilting");

  return (
    <>
      <QueryBar setQuery={setQuery} />
      <BooksGrid
        publisher={publisher}
        setPublisher={setPublisher}
        query={query}
      />
    </>
  );
};

export default Home;
