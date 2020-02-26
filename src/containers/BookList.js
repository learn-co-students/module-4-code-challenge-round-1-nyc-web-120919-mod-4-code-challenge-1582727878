import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newBook={this.props.newBook}/>
        <ul>{this.props.books.map(book => {
          return <Book key={book.id} handleBook={this.props.handleBook} book={book}/>})}</ul>
      </div>
    );
  }
}

export default BookList;
