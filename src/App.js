import React, { Component} from "react";
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
    this.setState((prevState) => {
      return {books: [...prevState.books, newBooks]}
    })
  }

  newBook = (bookInfo) => {
    fetch('http://localhost:3005/books', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(bookInfo)
    })
    .then((response) => {
      return response.json();
    })
    .then((newBook) => {
      this.setState((prevState) => {
      return {books: [...prevState.books, newBook]}
      })
    })
  }

  render() {
    const booksForShelf = this.state.books.filter((book) => book.onShelf)
    return (
        <div className="book-container">
          <BookList handleBook={this.handleBook} books={this.state.books} newBook={this.newBook} />
          <Bookshelf handleBook={this.handleBook} shelfBooks={booksForShelf} />
          <img src={logo} alt="logo"></img>
        </div>
    );
  }
}

export default App;
