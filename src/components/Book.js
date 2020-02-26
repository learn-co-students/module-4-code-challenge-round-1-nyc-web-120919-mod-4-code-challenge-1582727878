import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}></img>
    </div>
  );
};

export default Book;
