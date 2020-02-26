import React from "react";

class Form extends React.Component {

state = {
  title: "",
  author: "",
  img: ""
}

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

// handleTitle = (e) => {
//   this.setState({title: e.target.value})
// }

// handleAuthor = (e) => {
//   this.setState({author: e.target.value})
// }

// handleImg = (e) => {
//   this.setState({img: e.target.value})
// }

handleSubmit = (e) => {
  e.preventDefault()
  // console.log(this.state, this.props.books)
  fetch('http://localhost:3005/books', {
  method: "POST",
  headers: {'content-type': 'application/json',
        Accept: 'application/json'
      },
  body: JSON.stringify(this.state)
})
  .then(resp => resp.json())
  .then(newBook => {
  this.props.addBook(newBook)
})
}


  render() {
    // console.log(this.state.author)
    return <h1>{
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="title"/>
        <input type="text" name="author" value={this.state.author} onChange={this.handleChange} placeholder="author"/>
        <input type="text" name="img" value={this.state.img} onChange={this.handleChange} placeholder="img"/>
        <input type="submit" Submit />
      </form>
      }</h1>;
  }
}

export default Form;
