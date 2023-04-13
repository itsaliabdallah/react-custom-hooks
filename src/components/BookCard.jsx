import { useState } from "react";

export default function BookCard({ title, imgUrl, clicked }) {
  return (
    <div onClick={clicked}>
      <p> {title}</p>
      <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
    </div>
  );
}
