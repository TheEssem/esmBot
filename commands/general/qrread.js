const jsqr = require("jsqr");
const fetch = require("node-fetch");
const sharp = require("sharp");
const { clean } = require("../../utils/misc.js");
const Command = require("../../classes/command.js");

class QrReadCommand extends Command {
  async run() {
    const image = await require("../../utils/imagedetect.js")(this.client, this.message);
    if (image === undefined) return `${this.message.author.mention}, you need to provide an image with a QR code to read!`;
    this.message.channel.sendTyping();
    const data = await (await fetch(image.path)).buffer();
    const rawData = await sharp(data).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const qrBuffer = jsqr(rawData.data, rawData.info.width, rawData.info.height);
    if (!qrBuffer) return `${this.message.author.mention}, I couldn't find a QR code!`;
    return `\`\`\`\n${await clean(qrBuffer.data)}\n\`\`\``;
  }

  static description = "Reads a QR code";
}

module.exports = QrReadCommand;