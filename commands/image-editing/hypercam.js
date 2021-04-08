const ImageCommand = require("../../classes/imageCommand.js");

class HypercamCommand extends ImageCommand {
  constructor(message, args, content) {
    super(message, args, content);
  }

  params = {
    water: "./assets/images/hypercam.png",
    gravity: 1,
    resize: true
  };

  static description = "Adds the Hypercam watermark to an image";
  static aliases = ["hcam"];

  static noImage = "you need to provide an image to add a Hypercam watermark!";
  static command = "watermark";
}

module.exports = HypercamCommand;