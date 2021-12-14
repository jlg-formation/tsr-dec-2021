import { Configurator } from "./Configurator";
import { Config } from "./interfaces/Config";
import { Multiplication } from "./Multiplication";
import "./style.scss";

function main() {
  // main function
  console.log("start front");
  const m = new Multiplication();
  m.render();
  const c = new Configurator();
  c.onChange((conf: Config) => {
    m.setSampleNbr(conf.sampleNbr);
    m.setMultiplicator(conf.multiplicator);
    m.render();
  });
}

main();
