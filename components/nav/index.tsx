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

        <label className="btn btn-circle swap swap-rotate">
          <input onClick={() => setNavToggled(!navToggled)} type="checkbox" />

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className={` ${navToggled ? "px-4" : "px-1"}`}>
        <div className="px-4">
          <Range
            name="Days"
            value={days}
            setValue={setDays}
            min={1}
            max={5}
            step={1}
          />
        </div>
        <ul className="space-y-6">
          <li className={`${!navToggled && "p-2"}`}>
            <div className={`${!navToggled && "p-4"}`}>
              <div className={``}>
                <p className="font-bold">POPULATION</p>
                <p className={`${navToggled && "hidden"}`}>
                  Initial Population Size of Strains
                </p>
              </div>

              <div className="pt-4 w-76">
                <AdenineProducer />
                <AdenineCheater />
                <LysineProducer />
                <LysineCheater />
              </div>
            </div>
          </li>
          <li className={`${!navToggled && "p-2"}`}>
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
