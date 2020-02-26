import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends Component {

  state = { bookData: [], shelf: []}

  addToShelf = (bookData) => {
    this.setState({ bookData: [...this.state.shelf, bookData]})
    // {console.log(this.state)}
  }

  removeBook = (bookData) => {
    this.setState({ shelf: this.state.shelf.filter(book => book === bookData)})
  }



  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(response => response.json())
      .then(data => this.setState({ bookData: data }));
  }

  render() {
    // console.log(this.state.addToShelf)
    return (
      <div className="book-container">
        <BookList bookData={this.state.bookData} addToShelf={this.addToShelf}/>
        <Bookshelf bookData={this.state.shelf} removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;
