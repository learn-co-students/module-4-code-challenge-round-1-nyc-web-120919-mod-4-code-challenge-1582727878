import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  return (
    <div onClick={() => props.clickHandler(props)}>
      <h1> BookShelf</h1>
      <ul>
        {props.title}
        </ul>
    </div>
  );
};

export default Bookshelf;
