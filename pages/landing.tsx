import React from "react";
import Lottie from "lottie-react";
import testTubeLottie from "../static/chemical-test-tube.json";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      {" "}
      {/* Hero */}
      <section className="text-gray-200 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Welcome to the Mutualism Simulator for multispecies mutualisms
            </h1>
            <p className="mb-8 leading-relaxed">
              This interactive simulator will allow you to assemble mutualist
              and cheater species into communities and track how their
              populations change as they interact. Click on the buttons below to
              learn about mutualisms and their importance, what the simulator is
              and how to use it, or jump right in and start testing ideas about
              mutualisms with many species
            </p>
            <div className="flex justify-center items-center">
              <Link href={"/how-to-use-simulator"}>
                <a className="link">How to use Simulator</a>
              </Link>
              <Link href={"/what-are-mutualisms"}>
                <a className="link mx-4">What are mutualisms</a>
              </Link>
              <Link href={"/simulator"}>
                <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Simulator
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie animationData={testTubeLottie} loop={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
