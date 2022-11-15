import React from "react";
import { useState } from "react";

interface Props {
  name: string;
}

const Range = (props: Props) => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex justify-between my-2">
      <label className="label-text mr-3" htmlFor={props.name}>
        {props.name}
      </label>
      <div>
        <input
          name={props.name}
          type="range"
          min="0"
          max="100"
          value={value}
          className="range range-primary"
          step="25"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
    </div>
  );
};

export default Range;
