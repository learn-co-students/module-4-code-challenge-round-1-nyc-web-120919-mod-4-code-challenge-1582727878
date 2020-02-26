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


  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(
        (books) => { 
          this.setState({
            books: books
          });
          // console.log(this.state.books, 'boooks')
        })
  }

  handleBookClick = (book) => {
    // clicking on a book should add to bookshelf
    // change the state of the bookshelf
    // take in an arguement book and add it to the bookself
    {/** if the book is in the bookshelf then don't add it..
      if the bookshelf includes the book then don't setState*/}
    if(!this.state.bookshelf.includes(book)){
      this.setState({
        bookshelf: [...this.state.bookshelf, book]
      })
    }
    console.log('click')
  }

  handleBookshelfClick = (bookObj) => {
    // need to have a new updated bookshelf when someone adds a book
    // need to change state from the bookshelf.. filter and use if
    const updatedBookshelf = this.state.bookshelf.filter(book => book.id !== bookObj.id)
    this.setState({
      bookshelf: updatedBookshelf
    })
    console.log(this.state.bookshelf, 'clickbookonshelf')
  }

  handleSubmit = (e, book) => {
    e.preventDefault()
    e.target.reset()
    console.log('submitttttt in app')
    // when i submit a book it needs to go into books
    // setstate in books and add it in
    this.setState({
      books: [...this.state.books, book]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleSubmit={this.handleSubmit} handleBookClick={this.handleBookClick} books={this.state.books}/>
        <Bookshelf handleBookshelfClick={this.handleBookshelfClick} bookshelf={this.state.bookshelf}/>
      </div>
    );
  }
}

export default App;
