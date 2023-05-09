import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";
import {
  SPECIES_RANGE_MIN,
  SPECIES_RANGE_MAX,
  SPECIES_RANGE_STEP,
} from "./constants";
const AdenineProducer = () => {
  const {
    adenineProducer,
    setAdenineProducer,
    navToggled,
    species,
    setSpecies,
    toggleRunSimulator,
  } = useSimState();
  return (
    <div>
      <div className="flex items-center justify-between  max-w-sm">
        <div className={`dropdown dropdown-hover ${navToggled && "hidden"}`}>
          <label
            tabIndex={0}
            className="btn btn-xs btn-square btn-secondary  m-1"
          >
            {species.adeop}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => setSpecies({ ...species, adeop: 0 })}>
              <a>0</a>
            </li>
            <li onClick={() => setSpecies({ ...species, adeop: 1 })}>
              <a>1</a>
            </li>
            <li onClick={() => setSpecies({ ...species, adeop: 2 })}>
              <a>2</a>
            </li>
            <li onClick={() => setSpecies({ ...species, adeop: 3 })}>
              <a>3</a>
            </li>
            <li onClick={() => setSpecies({ ...species, adeop: 4 })}>
              <a>4</a>
            </li>
          </ul>
        </div>
        <Range
          disabled={toggleRunSimulator}
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
