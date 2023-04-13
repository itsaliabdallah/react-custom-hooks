import { useState } from "react";

export default function useModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return { modalIsOpen, setIsOpen, closeModal };
}
