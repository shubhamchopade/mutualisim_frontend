import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";
import {
  SPECIES_RANGE_MIN,
  SPECIES_RANGE_MAX,
  SPECIES_RANGE_STEP,
} from "./constants";
const AdenineProducer = () => {
  const { adenineProducer, setAdenineProducer, navToggled } = useSimState();
  return (
    <div>
      <div className="flex items-center justify-between  max-w-sm">
        <div className={`dropdown dropdown-hover ${navToggled && "hidden"}`}>
          <label tabIndex={0} className="btn m-1">
            1
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>4</a>
            </li>
          </ul>
        </div>
        <Range
          name="Adenine Overproducer"
          value={adenineProducer}
          setValue={setAdenineProducer}
          min={SPECIES_RANGE_MIN}
          max={SPECIES_RANGE_MAX}
          step={SPECIES_RANGE_STEP}
          color="info"
        />
      </div>
    </div>
  );
};

export default AdenineProducer;
