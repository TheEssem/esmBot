const emojiRegex = require("emoji-regex");
const Command = require("../../classes/command.js");

class EmoteCommand extends Command {
  constructor(message, args, content) {
    super(message, args, content);
  }

  async run() {
    if (this.args.length === 0) return `${this.message.author.mention}, you need to provide an emoji!`;
    if (this.content.split(" ")[0].match(/^<a?:.+:\d+>$/)) {
      return `https://cdn.discordapp.com/emojis/${this.content.split(" ")[0].replace(/^<(a)?:.+:(\d+)>$/, "$2")}.${this.content.split(" ")[0].replace(/^<(a)?:.+:(\d+)>$/, "$1") === "a" ? "gif" : "png"}`;
    } else if (this.args[0].match(emojiRegex)) {
      const codePoints = [];
      for (const codePoint of this.args[0]) {
        codePoints.push(codePoint.codePointAt(0).toString(16));
      }
      return `https://twemoji.maxcdn.com/v/latest/72x72/${codePoints.join("-").replace("-fe0f", "")}.png`;
    } else {
      return `${this.message.author.mention}, you need to provide a valid emoji to get an image!`;
    }
  }

  static description = "Gets a raw emote image";
  static aliases = ["e", "em", "hugemoji", "hugeemoji", "emoji"];
  static arguments = ["[emote]"];
}

module.exports = EmoteCommand;