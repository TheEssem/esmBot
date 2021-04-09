const Command = require("../../classes/command.js");

class EncodeCommand extends Command {
  async run() {
    if (this.args.length === 0) return `${this.message.author.mention}, you need to provide a string to encode!`;
    const b64Encoded = Buffer.from(this.args.join(" ")).toString("base64");
    return `\`\`\`\n${b64Encoded}\`\`\``;
  }

  static description = "Encodes a Base64 string";
  static aliases = ["b64encode", "base64encode"];
  static arguments = ["[text]"];
}

module.exports = EncodeCommand;