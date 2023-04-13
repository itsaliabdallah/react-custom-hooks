import { useEffect, useState } from "react";
import { getPublishersBooks } from "../api/apiCalls";

export default function usePublisherBooks(publisher, limit = 3) {
  const [pubBooks, setPubBooks] = useState([]);
  const [pubError, setPubError] = useState(false);
  const [isPubLoading, setIsPubLoading] = useState(true);

  useEffect(() => {
    setIsPubLoading(true);
    getPublishersBooks(publisher, limit)
      .then((books) => {
        setPubBooks(books);
      })
      .catch((err) => {
        setPubError(err);
      })
      .finally(() => {
        setIsPubLoading(false);
      });
  }, [publisher]);

  return { pubBooks, pubError, isPubLoading };
}
