import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
export class AddStudent extends Component {
  addStudent = async newStudent => {
    try {
      await axios.post("/api/students", newStudent);
      this.props.history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  onSubmit = e => {
    e.preventDefault();
    const newStudent = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      email: this.refs.email.value
    };
    this.addStudent(newStudent);
  };

  render() {
    return (
      <div>
        <NavLink to="/" className="btn btn-light">
          Back
        </NavLink>
        <h1 className="text-primary text-center">Add Student Details</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <label className="age">Age</label>
            <input
              type="number"
              name="age"
              ref="age"
              placeholder="Enter Age"
              required
            />
          </div>
          <div className="form-group">
            <label className="email">Email</label>
            <input
              type="email"
              name="email"
              ref="email"
              placeholder="Enter email"
              required
            />
          </div>
          <input
            type="submit"
            value="Add Student"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    );
  }
}

export default AddStudent;
