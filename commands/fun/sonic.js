const wrap = require("../../utils/wrap");
const ImageCommand = require("../../classes/imageCommand");

class SonicCommand extends ImageCommand {
  params(args) {
    const cleanedMessage = args.join(" ").replaceAll("&", "\\&amp;").replaceAll(">", "\\&gt;").replaceAll("<", "\\&lt;").replaceAll("\"", "\\&quot;").replaceAll("'", "\\&apos;").replaceAll("%", "\\%");
    return {
      text: wrap(cleanedMessage, {width: 15, indent: ""})
    };
  }

  static description = "Creates a Sonic speech bubble image";
  static arguments = ["[text]"];

  static requiresImage = false;
  static requiresText = true;
  static noText = "you need to provide some text to make a Sonic meme!";
  static command = "sonic";
}

module.exports = SonicCommand;