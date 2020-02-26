import React from "react";

const Book = props => {
  // console.log(props, 'book props')
  return (
    <div onClick={props.handleBookClick ? ()=>props.handleBookClick(props.book) : ()=>props.handleBookshelfClick(props.book)}> 
      <h2>{props.book.title}</h2>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
