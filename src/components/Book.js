import React from "react";

const Book = (props) => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} onClick={() => {props.clickHandler(props.book)}}></img><br></br>
      {props.isShelf ? null : <button onClick={() => props.removeBook(props.book.id)}>Remove Book</button>}
    </div>
  );
};

export default Book;
