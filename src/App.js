import React, { Component } from "react";
// import Logo from "./logo.svg"; unsure what the problem I'm having here is...
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList: [],
    bookShelf: [],
    title: "",
    img: "",
    author: ""
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(resp => resp.json())
      .then(bookArray => {this.setState({
        bookList: bookArray
      })})
  }

  handleFormChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const newBook = {title: this.state.title, author: this.state.author, img: this.state.img}
    this.setState({
      bookList: [...this.state.bookList, newBook]
    })
    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBook)
    }).then(this.setState({
      title: '',
      img: '',
      author: ''
    }))
  }

  handleBookListClick = (book) => {
    const bookObj = {title: book.title, id: book.id, author: book.author, img: book.img}
    const foundBook = this.state.bookShelf.find(bookItem => bookItem.id === book.id)
    if (!foundBook) {
    this.setState({
      bookShelf: [...this.state.bookShelf, bookObj]
    })}
  } 

  handleBookShelfClick = (book) => {
    let newBookShelf = this.state.bookShelf.filter(bookItem => bookItem.id !== book.id)
    this.setState({
      bookShelf: newBookShelf
    })
  }

  render() {
    return (
      <div className="book-container">
        {/* <Logo/> can't get this to show up*/} 
        <BookList handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} handleBookListClick={this.handleBookListClick} books={this.state.bookList} title={this.state.title} author={this.state.author} img={this.state.img}/>
        <Bookshelf handleBookShelfClick={this.handleBookShelfClick} books={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
