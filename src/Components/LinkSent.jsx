import React from "react";
import { Link } from "react-router-dom";

export default function LinkSent(props) {
  return (
    //   props.alert && <div className="alert alert-danger alert-dismissable fade show text-center" role="alert">
    props.alert && (
      <div class="alert alert-success text-center" role="alert">
        Reset link sent!
        <Link to="/enterfpd">Click here</Link>
      </div>
    )
  );
}
