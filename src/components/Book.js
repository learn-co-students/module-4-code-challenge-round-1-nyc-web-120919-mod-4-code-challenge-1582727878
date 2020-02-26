import React from "react";

const Book = props => {

  const handleClick = () =>{
    props.handleBook(props.book)
  }

  return (
    <div >
      <h2>{props.book.title}</h2>
      <img onClick={handleClick} src={props.book.img} alt={props.book.title}></img>
    </div>
  );
};

export default Book;
