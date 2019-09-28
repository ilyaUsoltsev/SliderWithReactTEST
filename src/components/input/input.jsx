import React from "react";
import "./input.css";

export default function Input({ handler, placeholder, type, units }) {
  return (
    <div className="row justify-content-start">
      <div className="input-group mb-2">
        <div className="input-wrapper">
          <input placeholder={placeholder} onChange={handler} type={type} />
          <div className="postfix" style={{borderLeft: units ? '1px solid #ccc' : ''}}>
            <div>{units}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
