import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then((response) => {
      return response.json();
    })
    .then((books) => {
      this.setState((prevState) => {
        return {books: [...prevState.books, ...books]}
      })
    })
  }

  handleBook = (book) => {
    const newBooks = [...this.state.books].map(bookItem => {
      if (book.id === bookItem.id) {
        bookItem.onShelf = !bookItem.onShelf
      }
      return bookItem
    })
    this.setState(() => {
      return {books: [...this.state.books, newBooks]}
    })
  }

  render() {
    const booksForShelf = this.state.books.filter((book) => book.onShelf)
    return (
      <div className="book-container">
        <BookList handleBook={this.handleBook} books={this.state.books} />
        <Bookshelf handleBook={this.handleBook} shelfBooks={booksForShelf} />
      </div>
    );
  }
}

export default App;
