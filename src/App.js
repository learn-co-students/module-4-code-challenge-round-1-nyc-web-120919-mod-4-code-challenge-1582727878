import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import { ETIME } from "constants";

class App extends Component {
  state = {
    books: [],
    shelvedBooks: [],
    newBook: {
      title: '',
      author: '',
      img: ''
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp=>resp.json())
    .then(books => this.setState({ books }))
  }

  addToBookshelf = (id) => {
    const foundBook = this.state.books.find(book => book.id === id)
    if (!this.state.shelvedBooks.includes(foundBook)) {
      this.setState({ shelvedBooks: [...this.state.shelvedBooks, foundBook]})
    }
  }

  removeFromBookshelf = (id) => {
    const currentShelvedBooks = this.state.shelvedBooks.filter(book => book.id !== id)
    this.setState({ shelvedBooks: currentShelvedBooks })
  }

  handleSubmit = (e) => {
    let newBook = this.state.newBook
    let id = this.state.books.length + 1
    newBook.id = id
    this.setState((prevState) => ({
      books: [...this.state.books, newBook]
    }))
    e.preventDefault()
    // reset form after submit
    // post request to add newBook
  }

  handleChange = (e) => {
    let value = e.target.value
    let name  = e.target.name
    this.setState((prevState) => ({ 
      newBook: {
          ...this.state.newBook, 
          [name]: value
        }
      })
    )
  }

  render() {

    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.addToBookshelf} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Bookshelf books={this.state.shelvedBooks} clickHandler={this.removeFromBookshelf}/>
      </div>
    );
  }
}

export default App;
