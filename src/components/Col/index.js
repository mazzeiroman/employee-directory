import React from "react";

function Col(props) {
  // const size = props.size
  //   .split(" ")
  //   .map(size => "col-" + size)
  //   .join(" ");

  return (
  <div className="col-md-12">
  {props.children}
  </div> ) 
}

export default Col;
