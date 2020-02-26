import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  updateBook = (event) => {
    const { name, value } = event.target
    this.setState(() => ({ [name]: value }))
  }

  createBook = (event) => {
    event.preventDefault();
    this.props.createBook(this.state)
    this.setState(() => ({ title: '', author: '', img: '' }))
  }

  render() {
    return (
    <form onSubmit={this.createBook}>
      <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.updateBook} />
      <input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.updateBook} />
      <input type="text" name="img" placeholder="img" value={this.state.img} onChange={this.updateBook} />
      <button type="submit">Submit</button>
    </form>)
  }
}

export default Form;
