import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>
          {/*render list of books here*/
          this.props.books.map((bookObj) => {
            return (
              <Book 
              book={bookObj}
              key={bookObj.id}
              addBook={this.props.addBook}
              />
            )
          })
        
        }</ul>
      </div>
    );
  }
}

export default BookList;
