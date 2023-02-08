import React from "react";

export const SideBarElement = (props) => {
  return (
    <>
      <div>{props.number}</div>
      <div>
        <p>STEP {props.number}</p>
        <p>{props.title}</p>
      </div>
    </>
  );
};
