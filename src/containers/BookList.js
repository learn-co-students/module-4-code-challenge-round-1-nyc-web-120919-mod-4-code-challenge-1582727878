import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  
  render() {
    let displayedBooks = this.props.books.map(book => (<Book key={book.id} book={book} id={book.id} clickHandler={this.props.clickHandler}/> ))
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook} books={this.props.books} />
        <ul>{displayedBooks}</ul>
      </div>
    );
  }
}

export default BookList;
