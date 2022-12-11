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
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between">
        <div>
          <div className="flex p-4">
            <div className="w-40">
              <p>MEDIA</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                curabitur at augue nibh lacus.
              </p>
            </div>

            <div className="w-84 p-4">
              <Range
                name="glucose"
                value={glucose}
                setValue={setGlucose}
                min={0}
                max={3}
                step={1}
                color="primary"
              />
              <Range
                name="adenine"
                value={adenine}
                setValue={setAdenine}
                min={0}
                max={3}
                step={1}
                color="secondary"
              />
              <Range
                name="lysine"
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
        <div className="flex p-4">
          <div className="w-40">
            <p>POPULATION</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              curabitur at augue nibh lacus.
            </p>
          </div>

          <div className="p-4 w-84">
            <Range
              name="Adenine Producer"
              value={adenineProducer}
              setValue={setAdenineProducer}
              min={0}
              max={20}
              step={5}
              color="info"
            />
            <Range
              name="Adenine Cheater"
              value={adenineCheater}
              setValue={setAdenineCheater}
              min={0}
              max={20}
              step={5}
              color="success"
            />
            <Range
              name="Lysine Producer"
              value={lysineProducer}
              setValue={setLysineProducer}
              min={0}
              max={20}
              step={5}
              color="error"
            />
            <Range
              name="Lysine Cheater"
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
