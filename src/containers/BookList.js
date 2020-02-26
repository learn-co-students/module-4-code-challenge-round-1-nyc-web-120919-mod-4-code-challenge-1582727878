import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state = {
    bookList: [],
    author: '',
    title: '',
    img: ''
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          bookList: data
        })
      )
  }

  handleFormChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     }) 
    //basically if i got this working it would update 
    //the state
    //and then when submit was pressed, it would
    //fetch the api and post to it
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log("event", event)
    // console.log('props', props)

    //the posting would look like this
    //fetch('http://localhost:3005/books/', {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json"
  //   },
  //   body: JSON.stringify( thebookinstance/object )
  // })

  }



  render() {
    return (
      //
      <div className="book-list">
        <h1>Book List</h1>
        <Form 
          author = {this.state.author}
          title = {this.state.title}
          img = {this.state.img}
          handleFormChange={this.handleFormChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ul>{
          this.state.bookList.map(book =>
            <Book key={book.id} {...book} clickHandler={this.props.addToBookShelf}/>
          )
        }</ul>
      </div>
    );
  }

}

export default BookList;
