import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    // console.log(this.props.books, 'books???')
    const bookList = this.props.books.map(book =>
      <Book handleBookClick={this.props.handleBookClick} key={book.id} book={book}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default BookList;
