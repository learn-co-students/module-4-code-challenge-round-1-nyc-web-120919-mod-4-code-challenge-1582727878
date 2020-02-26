import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  render() {
    return <h1>{
      <form onSubmit={this.onSubmit}>

            <input type='text' placeholder="title" name="title"
                   value={this.state.title} onChange={this.handleChange} />

            
            <input type='text' placeholder="author" name="author"
                   value={this.state.author} onChange={this.handleChange}/>

            <input type='text' placeholder="img" name="img"
                   value={this.state.img} onChange={this.handleChange}/>

            <input type='submit' value='Submit' />

        </form>}
      </h1>;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    //since fetch in newBookSubmit is async, 
    //saving state in a new object before clearing the form
    const newBook = {...this.state};
    this.props.newBookSubmit(newBook);
    this.setState({title: '', author: '', img: ''})
  }

}

export default Form;
