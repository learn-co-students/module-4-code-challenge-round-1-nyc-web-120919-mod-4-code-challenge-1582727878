import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [], 
    shelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(data => {
      this.setState({books: data})
    })
  }

  moveToShelf = (id) => {
    let bookToMove = this.state.books.find(book => book.id === id)
    this.setState({shelf: [...this.state.shelf, bookToMove]})
    // console.log(this.state.shelf)
  }

  moveOffofShelf = (id) => {
    let booksToKeep = this.state.shelf.filter(book => book.id !== id)
    this.setState({shelf: booksToKeep})
  }

  addBook = (newBook) => {
  let bookArr = [...this.state.books, newBook]
  // console.log(bookArr)
  this.setState({books: bookArr})

  }

  
  render() {
    // console.log(this.state.shelf, 'shelf in app')
    return (
      <div className="book-container">
        <BookList addBook={this.addBook} clickHandler={this.moveToShelf} books={this.state.books} />
        <Bookshelf clickHandler={this.moveOffofShelf} shelf={this.state.shelf} />
      </div>
    );
  }
}

export default App;
