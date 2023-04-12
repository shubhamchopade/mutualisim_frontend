import React from "react";
import tree from "../public/assets/tree.png";
import coral from "../public/assets/coral.png";
import lichen from "../public/assets/lichen.jpg";
import shrimp from "../public/assets/shrimp.jpg";
import fish from "../public/assets/fish.jpg";
import plant from "../public/assets/plant.png";
import bee1 from "../public/assets/bee.jpg";
import bee2 from "../public/assets/bee.png";
import bird from "../public/assets/bird.png";
import squirrel from "../public/assets/squirrel.jpg";
import mutualist from "../public/assets/mutualist.jpg";

import Image from "next/image";
import Link from "next/link";

const WhatAreMutualisms = () => {
  return (
    <div className="prose container mx-auto px-5 md:px-0">
      <div className="flex justify-between my-4">
        <Link href={"/"}>
          <span className="link link-primary">← Home</span>
        </Link>
        <Link href={"/simulator"}>
          <span className="link link-primary">Simulator →</span>
        </Link>
      </div>

      <h1>What are mutualisms and why are they important?</h1>
      <p>
        Mutualisms are beneficial interactions between different species that
        result from trading resources or services. These interactions are
        critical for natural ecological systems because they provide services
        and resources to keystone species that determine the species composition
        of ecosystems.
      </p>
      <p>
        For example, forests are dependent on special fungi that live in or on
        their roots and provide the trees with nitrogen and phosphorus in
        exchange for sugar. Without this mutualism, trees would not be able to
        persist.
      </p>
      <Image
        src={
          "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        width={1000}
        height={500}
        className="object-cover"
      />

      <p>
        Similarly, corals harbor and protect algae that provide corals with
        nutrients to grow
      </p>

      <Image
        src={
          "https://images.pexels.com/photos/3204592/pexels-photo-3204592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        width={1000}
        height={500}
        className="object-cover"
      />

      <p>
        There are a wide range of mutualisms that involve species from every
        kingdom on earth. Lichens are a mutualism between fungi and algae and
        are the first organisms to colonize new barren surfaces such as those
        left by retreating glaciers.{" "}
      </p>

      <Image
        src={
          "https://images.unsplash.com/photo-1558737429-5b328ae0a8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        }
        width={1000}
        height={500}
        className="object-cover"
      />

      <p>
        Cleaner fish and cleaner shrimp remove parasites and dead tissue from
        the surface of fish{" "}
      </p>

      <div className="flex">
        <Image
          src={
            "https://images.unsplash.com/photo-1617691119825-ed726630cf5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          width={400}
          height={600}
          className="object-cover"
        />
        <Image
          src={
            "https://images.pexels.com/photos/11348768/pexels-photo-11348768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={400}
          height={600}
          className="object-cover"
        />
      </div>

      <p>
        Plants produce nectar for pollinators in exchange for them moving
        pollen.
      </p>

      <Image
        src={
          "https://images.pexels.com/photos/379926/pexels-photo-379926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        width={1000}
        height={500}
        className="object-cover"
      />

      {/* <Image src={bee1} width={1000} height={300} /> */}

      <p>
        Many birds and mammals disperse the fruits of plants that contain
        nutrients to induce animals to eat them.
      </p>

      <div className="flex">
        <Image
          src={
            "https://images.pexels.com/photos/929383/pexels-photo-929383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={400}
          height={700}
          className="object-cover"
        />

        <Image
          src={
            "https://images.pexels.com/photos/1161556/pexels-photo-1161556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={400}
          height={700}
          className="object-cover"
        />
      </div>

      <p>
        At the surface, mutualisms sound like selfless, altruistic interactions
        between species; however, they are actually better viewed as reciprocal
        antagonisms. Each mutualist will act in a way that maximizes its own
        fitness, here defined as an individual’s reproductive success relative
        to other individuals in a population. If being a better mutualist
        partner increases an individual’s fitness, then those individuals will
        leave more offspring and change the composition of the next generation,
        shifting the mutualism towards greater benefits. Likewise, if being a
        worse mutualist increases fitness, then that partner may become less
        beneficial and these changes might lead to mutualism breakdown where the
        partners no longer interact. Breakdown of mutualism may also result in
        extinction of one or both partners due to the loss of the relationship.{" "}
      </p>

      <p>
        Additionally, there may be species that take mutualistic resources or
        services but do not produce any themselves. These species may be very
        different from the mutualists (exploiters), like flies that take nectar
        but don’t pollinate or come from the mutualists themselves (cheaters)
        like bees that chew holes in flowers to get nectar or cleaner fish that
        take bites out of the fish they are cleaning rather than eating
        parasites on the fish.
      </p>

      <Image src={bee2} width={1000} height={300} />

      <p>
        One of the great challenges in the study of mutualism is understanding
        how this interaction persists and changes as the number of mutualist
        species, exploiters, and cheaters increase within a community of
        interacting partners. For example, in this mutualism between plants and
        pollinators you can see that there can be many different types of
        mutualists that may or may not interact with each other. Some mutualists
        can be very specific and others more general in their interactions.
      </p>

      <Image
        src={mutualist}
        width={500}
        height={300}
        className="object-cover mx-auto"
      />

      <p className="mb-16">
        As the number of species increases there is a greater chance for more
        competition and exploitation that may cause a mutualism to collapse.
        Using the simulator you can test ideas about how many mutualists can
        coexist and what are the effects of cheaters and exploiters on
        mutualistic communities.
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

export default WhatAreMutualisms;
