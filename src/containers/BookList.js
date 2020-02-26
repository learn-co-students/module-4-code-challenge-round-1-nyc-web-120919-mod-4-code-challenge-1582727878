import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const {newBook, books, handleBook} = this.props
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newBook={newBook}/>
        <ul>{books.map(book => <Book key={book.id} book={book} handleBook={handleBook} />)}</ul>
      </div>
    );
  }
}

export default BookList;
