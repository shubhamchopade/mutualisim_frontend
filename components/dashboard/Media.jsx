import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";
const Media = () => {
  const { adenine, glucose, lysine, setAdenine, setGlucose, setLysine } =
    useSimState();
  return (
    <div>
      <div className="pt-8 max-w-sm">
        <Range
          name="(provides food source) glucose"
          value={glucose}
          setValue={setGlucose}
          min={0}
          max={3}
          step={1}
          color="primary"
        />
        <Range
          name="(limiting nutrient) adenine"
          value={adenine}
          setValue={setAdenine}
          min={0}
          max={3}
          step={1}
          color="secondary"
        />
        <Range
          name="limiting nutrient) lysine"
          value={lysine}
          setValue={setLysine}
          min={0}
          max={3}
          step={1}
          color="accent"
        />
      </div>
    </div>
  );
};

export default Media;
