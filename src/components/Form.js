import React from "react";

class Form extends React.Component {
  render() {
    return <h1>{<form>
      <input onChange={this.props.handleFormChange} type='text' value={this.props.title} name='title' placeholder="BookTitle"/>
      <input onChange={this.props.handleFormChange} type='text' value={this.props.author} name='author' placeholder='author'/>
      <input onChange={this.props.handleFormChange} type='text' value={this.props.img} name='img' placeholder='imageUrl'/>
      <input onClick={e => this.props.handleFormSubmit(e)} type='submit'/>
      </form>}</h1>;
  }
}

export default Form;
