import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    books: []
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newBookSubmit={this.newBookSubmit}/>
        <ul>{this.state.books.map(book => 

                  <Book key={book.id} 
                        book={book} 
                        bookClicked={this.props.bookClicked}/>
                        
                        )}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(data => this.setState({books: data}))
  }

  newBookSubmit = newBook => {
    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newBook)
    })
    .then(resp => resp.json())
    .then(data => {
      const newBookList = [...this.state.books, data]
      this.setState({books: newBookList})
    })
  }

}

export default BookList;
