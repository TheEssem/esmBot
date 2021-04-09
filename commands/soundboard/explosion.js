const soundPlayer = require("../../utils/soundplayer.js");
const MusicCommand = require("../../classes/musicCommand.js");

class ExplosionCommand extends MusicCommand {
  async run() {
    return await soundPlayer.play(this.client, "./assets/audio/explosion.ogg", this.message);
  }

  static description = "Plays an explosion sound effect";
}

module.exports = ExplosionCommand;