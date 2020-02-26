import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleClick(props.id)}>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default Book;
