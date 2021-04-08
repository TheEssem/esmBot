const ImageCommand = require("../../classes/imageCommand.js");

class ReverseCommand extends ImageCommand {
  constructor(message, args, content) {
    super(message, args, content);
  }

  params(args, url, delay) {
    return {
      delay: delay ? (100 / delay.split("/")[0]) * delay.split("/")[1] : 0
    };
  }

  static description = "Reverses an image sequence";
  static aliases = ["backwards"];

  static requiresGIF = true;
  static noImage = "you need to provide an image to reverse!";
  static command = "reverse";
}

module.exports = ReverseCommand;