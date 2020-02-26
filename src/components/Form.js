import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newBook(this.state)
  }

  render() {
    return <div>
      <h2>Add a new book:</h2>
      <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input type="text" value={this.state.title} onChange={this.handleChange} name="title"></input>
        <br></br>
        <label>Author:</label>
        <input type= "text" value={this.state.author} onChange={this.handleChange} name="author"></input>
        <br></br>
        <label>Image URL:</label>
        <input type= "text" value={this.state.img} onChange={this.handleChange} name="img"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>

    </div>;
  }
}

export default Form;
