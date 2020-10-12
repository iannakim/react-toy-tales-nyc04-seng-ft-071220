import React, { Component } from 'react';

class ToyForm extends Component {


  state = {
    name: "",
    image: ""
  }


  //helper method that changes the state whenever a user enters an input on the form
  handleChange = (event) => {
    this.setState({
      // event.target.name basically should be the keys of the state which should match the name on our form
      [event.target.name]: event.target.value
    })
  }

  //helper method to make a fetch POST request
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
        likes: 0
      })
    })
    .then(res => res.json())
    .then((newlyCreatedToy) => {
      this.props.addNewToy(newlyCreatedToy)
    })
  }


  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
