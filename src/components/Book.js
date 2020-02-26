import React from "react";

const Book = props => {
  return (
    <div onClick= {e => props.handleBookClick(props)}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="book"/>
    </div>
  );
};

export default Book;
