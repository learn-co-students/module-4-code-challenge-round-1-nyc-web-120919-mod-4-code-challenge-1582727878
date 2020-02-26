import React from "react";


const Book = props => {
  return (
    <div onClick={() => props.addToShelf ? props.addToShelf(props.bookData) : props.removebook(props.bookData) }>
      {/* {console.log(props.addToShelf, 'click?')} */}
      <h2>{props.bookData.title}</h2>
      <img src={props.bookData.img} alt="photozz"/>

    </div>
  );
};

export default Book;
