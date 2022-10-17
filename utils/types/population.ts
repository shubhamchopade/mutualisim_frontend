type colony = {
  /**
   * total colonies
   */
  total_colonies: number;
  colony_population: number;
};

interface PopulationTypes {
  lysine_producer: colony;
  lysine_cheater: colony;
  adenine_producer: colony;
  adenine_cheater: colony;
}

/**
 * Species in the sequence
 */
export type species = [
  "adenine_producer",
  "lysine_producer",
  "adenine_cheater",
  "lysine_cheater"
];

export default PopulationTypes;
