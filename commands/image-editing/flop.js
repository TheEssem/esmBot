const ImageCommand = require("../../classes/imageCommand.js");

class FlopCommand extends ImageCommand {
  constructor(message, args, content) {
    super(message, args, content);
  }

  params = {
    flop: true
  };

  static description = "Flips an image";
  static aliases = ["flip2"];

  static noImage = "you need to provide an image to flop!";
  static command = "flip";
}

module.exports = FlopCommand;