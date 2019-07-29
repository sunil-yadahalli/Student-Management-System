import React, { Fragment, Component } from "react";
import StudentItem from "./StudentItem";
import axios from "axios";
import { NavLink } from "react-router-dom";

export class Students extends Component {
  state = {
    students: []
  };
  componentWillMount() {
    this.getStudents();
  }
  getStudents = async () => {
    try {
      const res = await axios.get("/api/students");
      this.setState({ students: res.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  onDelete = async id => {
    try {
      await axios.delete(`/api/students/${id}`);
      this.getStudents();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { students } = this.state;

    return (
      <div>
        <h1 className="text-primary text-center">Students Details</h1>
        {students.length > 0 ? (
          <Fragment>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {students.map(student => (
                  <StudentItem
                    key={student._id}
                    student={student}
                    onDelete={this.onDelete}
                  />
                ))}
              </tbody>
            </table>
            <br />
            <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i className="fas fa-user-plus" />
              Add student
            </NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <p className="lead">No students records..!! Add one</p>
            <NavLink to="/students/add" className="btn btn-primary btn-block" />
            <i className="fas fa-user-plus" />
            Add student
          </Fragment>
        )}
      </div>
    );
  }
}

export default Students;
