import Link from "next/link";
import React from "react";

const HowToUse = () => {
  return (
    <div className="prose container mx-auto">
      <div className="flex justify-between my-4">
        <Link href={"/"}>
          <span className="link link-primary">← Home</span>
        </Link>
        <Link href={"/simulator"}>
          <span className="link link-primary">Simulator →</span>
        </Link>
      </div>
      <h1>How to use the Simulator</h1>
      <p>
        The simulator is based on an experimental laboratory system of
        genetically manipulated yeast that trade resources to allow different
        strains to grow together. The simulator allows yeast cells with
        different functions to grow and interact through time. Each simulated
        cell completes its life cycle that is modeled from real data about how
        yeast cells grow. There are three strain types that you are able to
        manipulate and there are three nutrients in the media that you can also
        change. You can think of the strains as different species as each strain
        is reproductively isolated from the other strains and they cannot
        exchange genetic material.
      </p>
      <p>
        In this diagram you see two different types of yeast strains that are
        trading resources through the surrounding media in which they grow. The
        strain on top is called an Adenine Overproducer (AdeOP) because it
        produces extra adenine and secretes it into the media as it grows (→
        Ade). In addition, AdeOPs cannot produce lysine themselves so have to
        import it from the media (← Lys). The strain on the bottom is called a
        Lysine Overproducer (LysOP) because it produces extra lysine that is
        released mainly when the cell dies (→ LysOP), but cannot produce adenine
        (← Ade). When combined together in media lacking adenine and lysine the
        two strain types form a mutualism by trading adenine and lysine through
        the media. These two strains can then cross feed each other and their
        populations will grow. As the populations grow, they also need to use
        other nutrients in the media such as glucose, and when populations sizes
        are large they may start competing for these other nutrients (|--|).
      </p>

      <p>
        {" "}
        There are also cheater strains that consume either adenine or lysine but
        do not overproduce either of these resources. You can think of these as
        direct competitors with each of the mutualist strains. For example, the
        lysine cheater will consume lysine that is also needed by the Adenine
        Overproducer. If competition is very strong, the cheater strains may
        drive one of the mutualist strains to extinction and cause the mutualism
        to completely collapse
      </p>

      <p>
        In the simulator you can control the following inputs to build different
        types and sizes of communities:
      </p>
      <ul>
        <li>
          the type and number of mutualist strains and their initial population
          size
        </li>
        <li>
          the type and number of cheater strains and their initial population
          size
        </li>
        <li>
          the starting values of adenine, lysine, and glucose in the media.
        </li>
      </ul>

      <p>
        For example, you could start a community with just one strain of each
        mutualist type—1 adeOP, 1 lysOP—to make a pairwise mutualism and study
        its dynamics. Or make a community that has up to 4 strains of each
        mutualist type and each of the cheater strains.
      </p>

      <p>
        ou designate your starting community by using pull down menus to choose
        the number of strains and a slider to choose population size. In this
        example there are 2 strains of AdeOPs, 2 strains of lysOPs each starting
        with 65 individual cells, and 1 cheater strain that takes adenine and 1
        cheater strain that takes lysine each starting with 10 individual cells.
      </p>

      <p>
        You can also change the level of nutrients in the starting media by
        using sliders. The lower the number the lower the amount of resources
        already in the media. In this example, the simulator starts with just a
        little bit of glucose, adenine, and lysine in the media. Keep in mind
        that the mutualist strains will be adding adenine or lysine but glucose
        is not replenished as the cell grows.
      </p>

      <p className="mb-16">
        The last thing that you can select is the number of days you want the
        community to interact. Typically yeast strains take about 2 hours to go
        through their life cycle under ideal growing conditions. The strains in
        the simulator will grow a little slower but you can figure on about 8
        6-8 generations per day.
      </p>
      <div className="flex justify-between my-8">
        <Link href={"/"}>
          <span className="link link-primary">← Home</span>
        </Link>
        <Link href={"/simulator"}>
          <span className="link link-primary">Simulator →</span>
        </Link>
      </div>
    </div>
  );
};

export default HowToUse;
