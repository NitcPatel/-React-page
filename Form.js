import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      "username" :'',
      "email" :'',
      "dob":'',
      "pwd":'',
      "formInValid":true,
      "errors":{"username":true,"dob":true,"email":true}
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatedob = this.validatedob.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange(event,pattern) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field] : value,
    },()=>{this.validateField(field,value)});
  }
  
  validateField(fieldName, value) {
    switch(fieldName) {
      case 'username':
        this.validateName(fieldName, value);
        break;
      case 'dob':
        this.validatedob(fieldName, value);
        break;
      case 'email':
        this.validateEmail(fieldName, value);
        break;       
      default:
        break;
    }
    this.setState({formErrors: this.state.errors});
  }

  validateName(fieldName, value){
    if(value.length<11 && value.match(/[^\d][a-zA-Z]{5,11}/)){
        this.state.errors.username = false;
        this.state.formInValid = false;
    }
  }
  validatedob(fieldName, value){
     var year = value.split("-")[0];
     var currentYear = new Date();
     currentYear = currentYear.getFullYear();
     console.log(currentYear -year);
     if(currentYear -year < 18){
      this.state.errors.dob = false;
      this.state.formInValid = false;
     }
  }
  validateEmail(field,value){
    this.state.errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(this.state.errors.email){
      this.state.errors.email = false;
      this.state.formInValid = false;
    } 
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="shadow col-12 col-sm-12 col-md-4 offset-md-4 offset-lg-4">
       
        <h4 className="text-center">Contact Us</h4>
        <form>
          <div className="form-group">
            <label htmlFor="email">Enter Name:</label>
            <input type="text" 
                    id="name" 
                    placeholder="Enter user Name"
                    name = "username"
                    value={this.state.username} 
                    onChange={this.handleChange}
                    className={this.state.errors.username ? "error form-control" : "form-control"}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter user Email"
                  value={this.state.email}
                  onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Date Of Birth:</label>
            <input type="date" 
                  className="form-control" 
                  id="dob" 
                  name ="dob"
                  placeholder="Enter user Email"
                  value={this.state.dob}
                  onChange={this.handleChange}
                  className={this.state.errors.dob ? "error form-control" : "form-control"}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" 
                  className="form-control" 
                  id="pwd" 
                  name="pwd"
                  placeholder="Enter password" 
                  value={this.state.pwd}
                  onChange={this.handleChange}
                  className={this.state.errors.email ? "error form-control" : "form-control"}/>
          </div>
          <div className="text-center">
                <button type="submit" className="text-center btn btn-primary" 
                        onSubmit={this.handleSubmit}
                        disabled={this.state.formInValid}
                        >Submit</button>
                        &nbsp; 
                <button type="reset" className="btn btn-danger">Reset the form!</button></div>
        </form>
        <p className="text-center text-danger">** Red colored are required field !!</p>
      </div>
    );
  }
}

export default Form;




