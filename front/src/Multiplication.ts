export class Multiplication {
  public multiplicator: number = 2;
  public sampleNbr: number = 10;

  constructor() {
    console.log("aaa instantiate new multiplication");
  }

  public clean() {
    const gPoint = document.querySelector("svg g.point");
    gPoint.innerHTML = "";
    const gLine = document.querySelector("svg g.line");
    gLine.innerHTML = "";
  }

  public render() {
    console.log("I render");

    this.clean();

    const gPoint = document.querySelector("svg g.point");
    console.log("gPoint: ", gPoint);

    const cx0 = 220;
    const cy0 = 220;
    const r0 = 200;

    const n = this.sampleNbr;

    for (let i = 0; i < n; i++) {
      console.log("i: ", i);

      const angle = ((2 * Math.PI) / n) * i;

      const cx = cx0 + r0 * Math.cos(angle);
      const cy = cy0 + r0 * Math.sin(angle);
      const r = 3;

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", `${cx}`);
      circle.setAttribute("cy", cy + "");
      circle.setAttribute("r", String(r));

      gPoint.appendChild(circle);
    }

    this.renderLine();
  }

  public renderLine() {
    const gLine = document.querySelector("svg g.line");

    const cx0 = 220;
    const cy0 = 220;
    const r0 = 200;

    const n = this.sampleNbr;
    const p = this.multiplicator;

    for (let i = 0; i < n; i++) {
      console.log("i: ", i);

      const angle1 = ((2 * Math.PI) / n) * i;
      const angle2 = p * angle1;

      const x1 = cx0 + r0 * Math.cos(angle1);
      const y1 = cy0 + r0 * Math.sin(angle1);
      const x2 = cx0 + r0 * Math.cos(angle2);
      const y2 = cy0 + r0 * Math.sin(angle2);

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", `${x1}`);
      line.setAttribute("y1", `${y1}`);
      line.setAttribute("x2", `${x2}`);
      line.setAttribute("y2", `${y2}`);

      gLine.appendChild(line);
    }
  }

  public setMultiplicator(multiplicator: number) {
    this.multiplicator = multiplicator;
  }

  public setSampleNbr(sampleNbr: number) {
    this.sampleNbr = sampleNbr;
  }
}
