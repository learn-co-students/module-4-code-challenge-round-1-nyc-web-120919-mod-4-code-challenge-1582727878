import React from "react";

const Book = props => {

  const handleClick = () =>{
    props.handleBook(props.book)
  }

  return (
    <div onClick={handleClick}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}></img>
    </div>
  );
};

export default Book;
