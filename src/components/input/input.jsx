import React from "react";

export default function Input({handler, placeholder, type}) {
  return (
    <div className="row justify-content-start">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">px</div>
        </div>
        <input
          placeholder={placeholder}
          onChange={handler}
          type={type}
        />
      </div>
    </div>
  );
}
