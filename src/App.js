import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const bookURL = 'http://localhost:3005/books'
class App extends Component {
  state = {
    bookList: [],
    bookShelf: []
  }

  getBooks = () => {
    fetch(bookURL)
      .then(resp => resp.json())
      .then(bookList => {
        this.setState(() => ({ bookList }))
      })
  }

  componentDidMount() {
    this.getBooks()
  }

  addToBookShelf = (id) => {
    this.setState((state) => {
      const bookShelf = [...state.bookShelf]
      if (!bookShelf.includes(id))
        bookShelf.push(id)
      return { bookShelf }
    })
  }

  bookShelfBooks = () => {
    return this.state.bookList.filter(book => {
      return this.state.bookShelf.includes(book.id)
    })
  }

  removeFromBookShelf = (id) => {
    this.setState((state) => {
      const index = state.bookShelf.indexOf(id)
      state.bookShelf.splice(index, 1)
      return { bookShelf: state.bookShelf }
    })
  }

  createBook = (book) => {
    // this.setState((state) => {
    //   book.id = state.bookList.length + 1
    //   return { bookList: [book, ...state.bookList] }
    // }, () => console.log(this.state))

    fetch(bookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    }).then(resp => resp.json())
      .then(book => this.setState((state) => ({ bookList: [book, ...state.bookList] })))
  }

  render() {
    return (
      <div className="book-container">
        <BookList bookList={this.state.bookList} addToBookShelf={this.addToBookShelf} createBook={this.createBook} />
        <Bookshelf bookShelf={this.bookShelfBooks()} removeFromBookShelf={this.removeFromBookShelf} />
      </div>
    );
  }
}

export default App;
