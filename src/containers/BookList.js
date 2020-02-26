import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  
  
  
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} title={this.props.title} author={this.props.author} img={this.props.img}/>
        <ul>{this.props.books.map(book => <Book handleBookClick={this.props.handleBookListClick} key={book.id} {...book}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
