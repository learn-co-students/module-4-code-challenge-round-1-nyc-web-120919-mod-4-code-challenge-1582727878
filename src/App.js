import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookShelf: [],
    title: '',
    img: '',
    author: ''
  }
  addToBookShelf = (event) => {
    this.setState({
      bookShelf: [...this.state.bookShelf, event]
    })
  }
  removeFromShelf = (event) => {
    let newArray = this.state.bookShelf.filter(book => !(book.id === event.id))
    this.setState({ bookShelf: newArray })
  } 


  render() {
    return (
      <div className="book-container">
        <BookList addToBookShelf={this.addToBookShelf} />
        {this.state.bookShelf.map(book =>
            <Bookshelf key={book.id} {...book} clickHandler={this.removeFromShelf}/>
          )}
      </div>
    );
  }
}

export default App;
