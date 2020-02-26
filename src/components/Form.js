import React from "react";

class Form extends React.Component {
  
  state = {
    title: '',
    author: '',
    img: ''

  }

  handleForm = (e) => {
    e.preventDefault()
    // debugger
    this.setState({
      [e.target.name]: e.target.value
      //i can also use placeholder
    })
    // console.log(this.state, 'formmmm')
  }




  render() {

    return (
      <form onSubmit={(e) => this.props.handleSubmit (e, this.state)}>
        <input onChange={this.handleForm} type="text" name="title" placeholder='title' />
        <input onChange={this.handleForm} type="text" name="author" placeholder='author' />
        <input onChange={this.handleForm} type="text" name="img" placeholder='img' />
        <button>Submit</button>
      </form>

    )
  }
}

export default Form;