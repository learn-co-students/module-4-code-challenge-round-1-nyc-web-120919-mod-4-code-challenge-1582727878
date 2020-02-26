import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

state = {
  books: [],
  bookshelf: []
}

componentDidMount(){
  fetch("http://localhost:3005/books")
  .then(resp => resp.json())
  .then(books => {
    this.setState({
        books: books 
    })
  })
}

addBook = (id) => {
const foundBook = this.state.books.find(book => {
  return book.id === id
})
  if(!this.state.bookshelf.includes(foundBook)) {
    this.setState({
      bookshelf: [...this.state.bookshelf, foundBook] 
    })
  }
}

removeBook = (id) => {
  const filteredShelf = this.state.bookshelf.filter(book => {
    return book.id !== id
  })
  this.setState({
    bookshelf: filteredShelf
  })
}


  render() {
    return (
      <div className="book-container">
        <BookList 
          books={this.state.books} 
          addBook={this.addBook}
        />
        <Bookshelf 
          bookshelf={this.state.bookshelf}
          removeBook={this.removeBook}
        />
      </div>
    );
  }
}

export default App;
