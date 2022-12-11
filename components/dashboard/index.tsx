import React from "react";
import { useSimState } from "../../store/SimProvider";
import Range from "../range";

const Dashboard = () => {
  const { realtimeData } = useSimState();

  console.log(realtimeData);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between">
        <div>
          <div className="flex p-4">
            <div className="w-40">
              <p>MEDIA</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                curabitur at augue nibh lacus. Justo, pharetra aenean viverra
                ullamcorper vel nulla gravida{" "}
              </p>
            </div>

            <div className="w-84 p-4">
              <Range name="glucose" />
              <Range name="adenine" />
              <Range name="lysine" />
            </div>
          </div>
        </div>
        <div className="flex p-4">
          <div className="w-40">
            <p>POPULATION</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              curabitur at augue nibh lacus. Justo, pharetra aenean viverra
              ullamcorper vel nulla gravida{" "}
            </p>
          </div>

          <div className="p-4 w-84">
            <Range name="Adenine Cheater" />
            <Range name="Lysine Cheater" />
            <Range name="Adenine Producer" />
            <Range name="Lysine Producer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
