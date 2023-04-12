import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";
const Media = () => {
  const { adenine, glucose, lysine, setAdenine, setGlucose, setLysine } =
    useSimState();
  return (
    <div className="">
      <div className="pt-2 max-w-sm">
        <Range
          name="(food source) glucose"
          value={glucose}
          setValue={setGlucose}
          min={0}
          max={3}
          step={1}
          color="primary"
        />
        <div className="border-b border-b-gray-700" />
        <Range
          name="(limiting nutrient) adenine"
          value={adenine}
          setValue={setAdenine}
          min={0}
          max={3}
          step={1}
          color="secondary"
        />
        <div className="border-b border-b-gray-700" />
        <Range
          name="limiting nutrient) lysine"
          value={lysine}
          setValue={setLysine}
          min={0}
          max={3}
          step={1}
          color="accent"
        />
        <div className="border-b border-b-gray-700" />
      </div>
    </div>
  );
};

export default Media;
