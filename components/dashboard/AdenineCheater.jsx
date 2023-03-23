import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";
import {
  SPECIES_RANGE_MIN,
  SPECIES_RANGE_MAX,
  SPECIES_RANGE_STEP,
} from "./constants";
const AdenineCheater = () => {
  const { adenineCheater, setAdenineCheater, navToggled, species, setSpecies } =
    useSimState();
  return (
    <div className="flex items-center justify-between  max-w-sm">
      <div className={`dropdown dropdown-hover ${navToggled && "hidden"}`}>
        <label tabIndex={0} className="btn btn-xs btn-square btn-secondary m-1">
          {species.adewt}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => setSpecies({ ...species, adewt: 1 })}>
            <a>1</a>
          </li>
          <li onClick={() => setSpecies({ ...species, adewt: 2 })}>
            <a>2</a>
          </li>
        </ul>
      </div>
      <Range
        name="Cheater that takes adenine"
        value={adenineCheater}
        setValue={setAdenineCheater}
        min={SPECIES_RANGE_MIN}
        max={SPECIES_RANGE_MAX}
        step={SPECIES_RANGE_STEP}
        color="success"
      />
    </div>
  );
};

export default AdenineCheater;
