const ImageCommand = require("../../classes/imageCommand.js");

class JPEGCommand extends ImageCommand {
  static description = "Adds max JPEG compression to an image";
  static aliases = ["needsmorejpeg", "jpegify", "magik2", "morejpeg", "jpg"];

  static noImage = "You need to provide an image to add more JPEG!";
  static command = "jpeg";
}

module.exports = JPEGCommand;