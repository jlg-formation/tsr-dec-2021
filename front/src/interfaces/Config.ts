export interface Config {
  multiplicator: number;
  sampleNbr: number;
}

export type A = Omit<Config, "multiplicator">;
