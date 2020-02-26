import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form id='add-book' > 
        <input onChange={this.props.handleForm} name="title" value={this.props.title} type='text' placeholder="add title" />
        <input onChange={this.props.handleForm} name="author" value={this.props.author} type='text' placeholder="add author" />
        <input onChange={this.props.handleForm} name="img" value={this.props.img} type='text' placeholder="add image" /> 
        {/* items should be sending information back to the parent to update state */}
        
        
        {/* submit button down here */}
        <input onClick={(event) => this.props.handleFormSubmit(event)} type='submit' value='addBook' />

      </form>
    )
  }
}


export default Form;
