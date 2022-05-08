import React from "react";

export default function Alert(props) {
  return (
    //   props.alert && <div className="alert alert-danger alert-dismissable fade show text-center" role="alert">
    props.alert && (
      <div class="alert alert-danger text-center" role="alert">
        Invalid Id/Password !
      </div>
    )
  );
}
