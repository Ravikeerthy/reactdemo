import React from "react";

const Practice = ({name}) => {
  console.log(name);
  return (
    <div>
      Practice Components {name}
      <h5> {name} </h5>
    </div>
  );
};

export default Practice;
