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
          {this.props.bookData.map(bookData => {
            // console.log(this.props.addToShelf)
            return <Book bookData={bookData} key={bookData.id} addToShelf={this.props.addToShelf}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default BookList;
