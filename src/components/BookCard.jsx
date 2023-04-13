import { useState } from "react";

export default function BookCard({ title, imgUrl, clicked }) {
  if (!imgUrl.imageLinks) {
    return (
      <div onClick={clicked}>
        <p> {title}</p>
        <img
          src="http://www.clker.com/cliparts/n/T/5/z/f/Y/image-missing-hi.png"
          alt="book thumbnail"
        />
      </div>
    );
  }

  return (
    <div onClick={clicked}>
      <p> {title}</p>
      <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
    </div>
  );
}
