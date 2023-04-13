import { useParams } from "react-router-dom";
import usePublisherBooks from "../hooks/usePublisherBooks";
import useModal from "../hooks/useModal";
import BookCard from "../components/BookCard";

const Publishers = () => {
  const { publisher } = useParams();
  const { pubBooks, pubError, isPubLoading } = usePublisherBooks(publisher, 20);

  const { modalIsOpen, setIsOpen, closeModal } = useModal();

  if (isPubLoading) return <p>Loading...</p>;

  return (
    <>
      <h2> Books from {publisher}</h2>

      <main className="books__grid">
        {pubBooks.map((book) => {
          return (
            <BookCard
              key={book.id}
              title={book.volumeInfo.title}
              imgUrl={book.volumeInfo}
              clicked={() => {
                setIsOpen(true);
              }}
            />
          );
        })}
      </main>
    </>
  );
};

export default Publishers;
