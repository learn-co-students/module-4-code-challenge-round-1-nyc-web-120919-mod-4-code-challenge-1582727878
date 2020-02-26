import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookShelf: []
  }

  render() {
    return (
      <div className="book-container">
        <BookList bookClicked={this.bookClicked}/>
        <Bookshelf books={this.state.bookShelf} 
                  bookClicked={this.shelfBookClicked} />
      </div>
    );
  }

  bookClicked = (book) => {
    const bookShelf = this.state.bookShelf;
    if (!bookShelf.find(shelfBook => shelfBook.id === book.id)) {
      const newBookShelf = [...bookShelf, book]
      this.setState({bookShelf: newBookShelf})
    } 
  }

  shelfBookClicked = (book) => {
    const newBookShelf = this.state.bookShelf.filter(oldBook => oldBook.id !== book.id)
    this.setState({bookShelf: newBookShelf})
  }
}

export default App;
