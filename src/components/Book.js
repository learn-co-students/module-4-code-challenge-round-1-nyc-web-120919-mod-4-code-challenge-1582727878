import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.clickHandler(props.book.id)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.title}/>
    </div>
  );
};

export default Book;
