import { Config } from "./interfaces/Config";

export class Configurator {
  callback: (conf: Config) => void = function () {};

  config: Config = {
    sampleNbr: 10,
    multiplicator: 2,
  };

  constructor() {
    this.init("sampleNbr");
    this.init("multiplicator");
  }

  onChange(callback: (conf: Config) => void) {
    this.callback = callback;
  }

  init(className: keyof Config) {
    const input = document.querySelector("input." + className);
    if (!(input instanceof HTMLInputElement)) {
      throw new Error("oups.");
    }
    console.log("input: ", input);
    input.value = this.config[className] + "";
    const label = document.querySelector("div." + className);
    label.innerHTML = this.config[className] + "";

    input.addEventListener("input", (evt: Event) => {
      console.log("evt: ", evt);

      this.config[className] = +(evt.target as HTMLInputElement).value;
      const label = document.querySelector("div." + className);
      label.innerHTML = this.config[className] + "";

      this.callback(this.config);
    });
  }
}
