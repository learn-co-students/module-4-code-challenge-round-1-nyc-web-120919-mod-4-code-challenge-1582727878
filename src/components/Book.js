import React from "react";

const Book = props => {
  return (
    <div onClick={props.addBook ? () => 
    props.addBook(props.book.id) : () =>
    props.removeBook(props.book.id) 
    
    }
    
    
    
    
    >
      <h2>{
      /*book title*/
      props.book.title
      }</h2>
      {
      /*book img*/
      `${props.book.img}`
      }
    </div>
  );
};

export default Book;
