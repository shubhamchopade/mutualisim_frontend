import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSimState } from "../../store/SimProvider";
import AdenineProducer from "../dashboard/AdenineProducer";
import AdenineCheater from "../dashboard/AdenineCheater";
import LysineProducer from "../dashboard/LysineProducer";
import LysineCheater from "../dashboard/LysineCheater";
import Media from "../dashboard/Media";
import Range from "../range";

const Navbar = () => {
  const {
    navToggled,
    setNavToggled,
    days,
    setDays,
    initialArr,
    setInitialArr,
    species,
  } = useSimState();

  useEffect(() => {
    const arr = new Array(days * 7);
    setInitialArr(arr);
  }, [days]);

  return (
    <nav
      className={`flex flex-col h-screen overflow-y-auto bg-gray-800 text-white transition-all ${navToggled ? "w-44" : "w-80"
        }`}
    >
      <div className="px-4 py-6 flex justify-between items-center">
        <h3 className="text-lg font-medium">Mutualism Simulator</h3>

      </div>
      <div className={` ${navToggled ? "px-4" : "px-1"}`}>
        <div className="px-4 card shadow-lg bg-secondary mb-4">
          <span className="label-text">Days</span>
          <Range
            value={days}
            setValue={setDays}
            min={1}
            max={5}
            step={1}
          />
        </div>
        <ul className="space-y-6">
          <li className={`card shadow-lg bg-secondary ${!navToggled && "p-2"}`}>
            <div className={`${!navToggled && "p-4"}`}>
              <div className={``}>
                <p className="font-bold">POPULATION</p>
                <p className={`${navToggled && "hidden"}`}>
                  Initial Population Size of Strains
                </p>
              </div>

              <div className="pt-4 w-76">
                <AdenineProducer />
                <div className="border-b border-b-gray-700" />
                <AdenineCheater />
                <div className="border-b border-b-gray-700" />
                <LysineProducer />
                <div className="border-b border-b-gray-700" />
                <LysineCheater />
              </div>
            </div>
          </li>
          <li className={`card shadow-lg bg-secondary ${!navToggled && "p-2"}`}>
            <div className={`${!navToggled && "p-4"}`}>
              <div className={``}>
                <p className="font-bold">MEDIA</p>
                <p className={`${navToggled && "hidden"}`}>
                  Input initial starting values for nutrients in the media and
                  the population sizes of the community
                </p>
              </div>
              <Media />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
