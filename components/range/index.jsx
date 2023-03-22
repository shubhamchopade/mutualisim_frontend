import React from "react";
import { useSimState } from "../../store/SimProvider";

const Range = (props) => {
  const { value, setValue, min, max, step, color } = props;
  const { navToggled } = useSimState();
  useSimState();
  return (
    <div className="flex justify-between items-center my-2 ml-2 max-w-xl">
      <div className={`${navToggled ? "w-24" : "w-44"}`}>
        <label
          className={`label-text  ${navToggled ? "w-24" : "w-36"}`}
          htmlFor={props.name}
        >
          {props.name}
        </label>
        <input
          name={props.name}
          type="range"
          min={min}
          max={max}
          value={value}
          className={`range range-xs range-${color} w-32 ${
            navToggled && "hidden"
          }`}
          step={step}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
      <p className="ml-3 w-4">{value}</p>
    </div>
  );
};

export default Range;
