import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  renderBooks = () => {
    return this.props.bookList.map(book => {
      return <Book key={book.id} {...book} handleClick={this.props.addToBookShelf} />
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createBook={this.props.createBook} />
        <ul>{ this.renderBooks() }</ul>
      </div>
    );
  }
}

export default BookList;
