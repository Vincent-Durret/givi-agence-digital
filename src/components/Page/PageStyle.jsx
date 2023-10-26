import React, { Children } from "react";

const PageStyle = (props) => {
  return (
    <div className="relative top-[12rem] h-autos max-w-full">
      {props.children}
    </div>
  );
};

export default PageStyle;
