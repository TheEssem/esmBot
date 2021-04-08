const ImageCommand = require("../../classes/imageCommand.js");

class SharpenCommand extends ImageCommand {
  constructor(message, args, content) {
    super(message, args, content);
  }

  params = {
    sharp: true
  };

  static description = "Sharpens an image";
  static aliases = ["sharp"];

  static noImage = "you need to provide an image to sharpen!";
  static command = "blur";
}

module.exports = SharpenCommand;