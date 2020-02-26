import React from "react";

class Form extends React.Component {
  render() {
    return <h1>
      <form onSubmit={this.props.handleSubmit}>
        <label> 
          Title:
          <input type='text' name='title' onChange={this.props.handleChange} />
        </label>
        <label>
          Author:
          <input type='text' name='author' onChange={this.props.handleChange}/>
        </label>
        <label> 
          Image:
          <input type='text' name='img' onChange={this.props.handleChange}/>
        </label>
        <input type='submit' value='submit'></input>
      </form>
    </h1>;
  }
}

export default Form;
