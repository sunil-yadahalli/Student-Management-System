import React from "react";
import { NavLink } from "react-router-dom";
//import AgeImage from "../layouts/AgeImage.png";
const StudentItem = ({ student, onDelete }) => {
  const { _id, name, age, email } = student;
  return (
    // <tr>
    //   <td>{student._id}</td>
    //   <td>{student.name}</td>
    //   <td>{student.age}</td>
    //   <td>{student.email}</td>

    //   <td>
    //     <NavLink to={`/students/edit/${student._id}`}>
    //       <i className="fas fa-user-edit" />
    //     </NavLink>
    //   </td>
    //   <td>
    //     <button
    //       className="btn btn-danger btn-sm"
    //       onClick={() => onDelete(student._id)}
    //     >
    //       <i className="fas fa-user-times" />
    //     </button>
    //   </td>
    // </tr>
    <div className="card bg-light">
      <h3 className="text-primary text-left">{name}</h3>
      <u1 className="list">
        <li>
          <i className="fas fa-envelope" />
          {" " + email}
        </li>
        <li>
          {/* <img src={AgeImage} alt="Age" style={{width:"25px", margin:"auto", display:"left"}}/> */}
          {" " + age}
        </li>
      </u1>
      <p>
        <NavLink to={`/students/edit/${_id}`} className="btn btn-dark btn-sm">
          Edit
        </NavLink>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(_id)}>
          Delete
        </button>
        <button style={{ float: "right" }} className="btn btn-primary btn-sm">
          profile
        </button>
      </p>
    </div>
  );
};

export default StudentItem;
