import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class EditStudent extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  componentWillMount() {
    this.getStudentDetails();
  }
  getStudentDetails = async () => {
    let editStudentId = this.props.match.params.id;
    try {
      const res = await axios.get(`/api/students/${editStudentId}`);
      this.setState({
        name: res.data.name,
        age: res.data.age,
        email: res.data.email
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  editStudent = async updatedStudent => {
    let editStudentId = this.props.match.params.id;
    try {
      await axios.put(`/api/students/${editStudentId}`, updatedStudent);
      this.props.history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  onSubmit = e => {
    e.preventDefault();
    const updatedStudent = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      email: this.refs.email.value
    };
    this.editstudent(updatedStudent);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <NavLink to="/" className="btn btn-light">
          Back
        </NavLink>
        <h1 className="text-primary text-center">Edit student Details</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="age">Age</label>
            <input
              type="number"
              name="age"
              ref="age"
              value={this.state.age}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="email">Email</label>
            <input
              type="email"
              name="email"
              ref="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            value="Save Details"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    );
  }
}

export default EditStudent;
