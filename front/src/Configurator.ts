import { Config } from "./interfaces/Config";

export class Configurator {
  callback: (conf: Config) => void = function () {};

  config: Config = {
    sampleNbr: 10,
    multiplicator: 2,
  };

  constructor() {
    const sampleNbrInput = document.querySelector("input.sampleNbr");
    if (!(sampleNbrInput instanceof HTMLInputElement)) {
      throw new Error("oups.");
    }
    console.log("sampleNbrInput: ", sampleNbrInput);
    sampleNbrInput.value = this.config.sampleNbr + "";
    const sampleNbrLabel = document.querySelector("div.sampleNbr");
    sampleNbrLabel.innerHTML = this.config.sampleNbr + "";

    sampleNbrInput.addEventListener("input", (evt: Event) => {
      console.log("evt: ", evt);

      this.config.sampleNbr = +(evt.target as HTMLInputElement).value;
      const sampleNbrLabel = document.querySelector("div.sampleNbr");
      sampleNbrLabel.innerHTML = this.config.sampleNbr + "";

      this.callback(this.config);
    });
  }

  onChange(callback: (conf: Config) => void) {
    this.callback = callback;
  }
}
