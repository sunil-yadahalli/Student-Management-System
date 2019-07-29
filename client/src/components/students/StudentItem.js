import React from "react";
import { NavLink } from "react-router-dom";
const StudentItem = ({ student, onDelete }) => {
  return (
    <tr>
      <td>{student._id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.email}</td>

      <td>
        <NavLink to={`/students/edit/${student._id}`}>
          <i className="fas fa-user-edit" />
        </NavLink>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(student._id)}
        >
          <i className="fas fa-user-times" />
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
