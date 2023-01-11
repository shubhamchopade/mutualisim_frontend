import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";

const Dashboard = () => {
  const {
    adenine,
    glucose,
    lysine,
    setAdenine,
    setGlucose,
    setLysine,
    adenineProducer,
    setAdenineProducer,
    adenineCheater,
    setAdenineCheater,
    lysineProducer,
    setLysineProducer,
    lysineCheater,
    setLysineCheater,
  } = useSimState();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between">
        <div className="max-w-xl">
          <div className="p-4">
            <div className="">
              <p className="font-bold">MEDIA</p>
              <p className="">
                Input initial starting values for nutrients in the media and the
                population sizes of the community
              </p>
            </div>

            <div className="w-84 pt-8">
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
        </div>
        <div className="p-4 ml-16 max-w-xl">
          <div className="">
            <p className="font-bold">POPULATION</p>
            <p className="">Initial Population Size of Strains</p>
          </div>

          <div className="pt-4 w-76">
            <Range
              name="Adenine Overproducer"
              value={adenineProducer}
              setValue={setAdenineProducer}
              min={0}
              max={20}
              step={5}
              color="info"
            />
            <Range
              name="Cheater that takes adenine"
              value={adenineCheater}
              setValue={setAdenineCheater}
              min={0}
              max={20}
              step={5}
              color="success"
            />
            <Range
              name="Lysine Overproducer"
              value={lysineProducer}
              setValue={setLysineProducer}
              min={0}
              max={20}
              step={5}
              color="error"
            />
            <Range
              name="Cheater that takes lysine"
              value={lysineCheater}
              setValue={setLysineCheater}
              min={0}
              max={20}
              step={5}
              color="warning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
