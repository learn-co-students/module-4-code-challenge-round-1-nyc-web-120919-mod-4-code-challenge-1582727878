import React from "react";

const Book = props => {
  return (
   <div onClick={(event)=> props.clickHandler(props)}>
    <h2>{props.title}</h2>
    <img src={props.img}></img>
    </div>
  );
};

export default Book;
