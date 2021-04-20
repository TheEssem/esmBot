const ImageCommand = require("../../classes/imageCommand");

class WallCommand extends ImageCommand {
  static description = "Creates a wall from an image";

  static noImage = "you need to provide an image to make a wall!";
  static command = "wall";
}

module.exports = WallCommand;