const ImageCommand = require("../../classes/imageCommand.js");

class WideCommand extends ImageCommand {
  params = {
    wide: true
  };

  static description = "Stretches an image to 19x its width";
  static aliases = ["w19", "wide19"];

  static noImage = "you need to provide an image to stretch!";
  static command = "resize";
}

module.exports = WideCommand;