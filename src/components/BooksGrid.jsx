import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Modal from "react-modal";
import useGoogleBooks from "../hooks/useGoogleBooks";
import usePublisherBooks from "../hooks/usePublisherBooks";
import useModal from "../hooks/useModal";

const customStyles = {
  content: {
    color: "black",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function BooksGrid({ query }) {
  const [publisher, setPublisher] = useState("");

  const { books, error, isLoading } = useGoogleBooks(query);

  const { pubBooks, pubError, isPubLoading } = usePublisherBooks(publisher);

  const { modalIsOpen, setIsOpen, closeModal } = useModal();

  if (isLoading) return <p>Loading...</p>;
  if (error || pubError) return <p>Something went wrong...</p>;
  return (
    <main className="books__grid">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Publishers other books"
        ariaHideApp={false}
      >
        {isPubLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>More books by this publisher</h2>
            <ul>
              {pubBooks.map((book) => {
                return <li key={book.id}>{book.volumeInfo.title}</li>;
              })}
            </ul>
          </div>
        )}
      </Modal>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            imgUrl={book.volumeInfo}
            clicked={() => {
              setPublisher(book.volumeInfo.publisher);
              setIsOpen(true);
            }}
          />
        );
      })}
    </main>
  );
}
