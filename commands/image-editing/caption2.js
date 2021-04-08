const ImageCommand = require("../../classes/imageCommand.js");
const words = ["me irl", "dank", "follow my second account @esmBot_", "2016", "meme", "wholesome", "reddit", "instagram", "twitter", "facebook", "fortnite", "minecraft", "relatable", "gold", "funny", "template", "hilarious", "memes", "deep fried", "2020", "leafy", "pewdiepie"];

class CaptionTwoCommand extends ImageCommand {
  constructor(message, args, content) {
    super(message, args, content);
  }

  params(args, url) {
    const newArgs = args.filter(item => !item.includes(url));
    return {
      caption: newArgs.length !== 0 ? newArgs.join(" ").replaceAll("&", "\\&amp;").replaceAll(">", "\\&gt;").replaceAll("<", "\\&lt;").replaceAll("\"", "\\&quot;").replaceAll("'", "\\&apos;").replaceAll("%", "\\%") : words.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * words.length + 1)).join(" ")
    };
  }

  static description = "Adds a me.me caption/tag list to an image/GIF";
  static aliases = ["tags2", "meirl", "memecaption", "medotmecaption"];
  static arguments = ["{text}"];

  static noText = "you need to provide some text to add a caption!";
  static noImage = "you need to provide an image to add a caption!";
  static command = "captionTwo";
}

module.exports = CaptionTwoCommand;
