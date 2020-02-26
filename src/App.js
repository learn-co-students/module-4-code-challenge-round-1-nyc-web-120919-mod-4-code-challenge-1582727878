import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(response => response.json())
    .then(books => this.setState({books: books}))
  }

  addToShelf = (book) => {
    let alreadyThere = false
    if (this.state.bookShelf){
      this.state.bookShelf.forEach(shelfBook => {
        if(shelfBook.id === book.id){
          alreadyThere = true
        }
      })
    }
    if (!alreadyThere){
      this.setState({ bookShelf: [...this.state.bookShelf, book] })
    }
  }

  removeFromShelf = (book) => {
    const remainingBooks = this.state.bookShelf.filter(shelfBook => {
      if (!(book.id === shelfBook.id)){
        return shelfBook
      }
    })
    this.setState({ bookShelf: remainingBooks })
  }

  addNewBook = (book) => {
    console.log(book)
    fetch(`http://localhost:3005/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(book => this.setState({ books: [...this.state.books, book] }))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelf={this.addToShelf} addNewBook={this.addNewBook}/>
        <Bookshelf books={this.state.bookShelf} removeFromShelf={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
