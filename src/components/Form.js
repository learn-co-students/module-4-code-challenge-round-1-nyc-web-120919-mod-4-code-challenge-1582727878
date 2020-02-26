import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }


  updateForm = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.addNewBook(this.state)
    this.setState({ title: '', author: '', img: ''})
  }

  render() {
    return <h1>
      <form onSubmit={this.submitHandler}>
        <input type="text" name={'title'} onChange={this.updateForm} value={this.state.title} placeholder="Title" />
        <input type="text" name={'author'} onChange={this.updateForm} value={this.state.author} placeholder="Author" />
        <input type="text" name={'img'} onChange={this.updateForm} value={this.state.img} placeholder="Img" />
        <button onClick={this.submitHandler}>Submit</button>
      </form>
    </h1>;
  }
}

export default Form;
