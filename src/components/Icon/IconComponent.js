//Card componenti çağırılacak

import React from "react";
import Icons from "./Icons";
const IconComponent = () => {
  return (
    <div className="w-full h-60 bg-border-top-color  ">
      <div className="  flex items-stretch ">
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
  );
};

export default IconComponent;
