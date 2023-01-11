import React from "react";
import { useState } from "react";

const Range = (props) => {
  const { value, setValue, min, max, step, color } = props;
  return (
    <div className="flex justify-between my-2">
      <label className="label-text mr-3 w-64" htmlFor={props.name}>
        {props.name}
      </label>
      <div>
        <input
          name={props.name}
          type="range"
          min={min}
          max={max}
          value={value}
          className={`range range-${color} w-64`}
          step={step}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        {/* <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div> */}
      </div>
      <p className="ml-3">{value}</p>
    </div>
  );
};

export default Range;
