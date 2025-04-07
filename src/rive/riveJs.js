import "../rive/rieve.css"

const rive = require("@rive-app/canvas");

const d = new rive.Rive({
    src: "./src/dracula_sukkub_2.riv",
    canvas: document.getElementById("demonRive"),
    artboard: "single-pill",
    autoplay: true,
    stateMachines: "single-state",
    onLoad: () => {
      d.resizeDrawingSurfaceToCanvas();
    },
  });