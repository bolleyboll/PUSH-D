import React from "react";
import { Link } from "react-router-dom";

export default function PassChanged(props) {
  return (
    //   props.alert && <div className="alert alert-danger alert-dismissable fade show text-center" role="alert">
    props.alert && (
      <div class="alert alert-success text-center" role="alert">
        Password has been changed! 
        <Link to="/login">login</Link>
      </div>
    )
  );
}
