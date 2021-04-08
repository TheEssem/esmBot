const client = require("../../utils/client.js");
const fetch = require("node-fetch");
const day = require("dayjs");
const duration = require("dayjs/plugin/duration");
day.extend(duration);
const MusicCommand = require("../../classes/musicCommand.js");

class NowPlayingCommand extends MusicCommand {
  constructor(message, args, content) {
    super(message, args, content);
  }

  async run() {
    if (process.env.NODE_ENV === "production") return "Music commands are coming soon, but they aren't ready yet. Stay tuned to @esmBot_ on Twitter for updates!";

    if (!this.message.channel.guild) return `${this.message.author.mention}, this command only works in servers!`;
    if (!this.message.member.voiceState.channelID) return `${this.message.author.mention}, you need to be in a voice channel first!`;
    if (!this.message.channel.guild.members.get(client.user.id).voiceState.channelID) return `${this.message.author.mention}, I'm not in a voice channel!`;
    const player = this.connection.player;
    if (!player) return `${this.message.author.mention}, I'm not playing anything!`;
    const track = await fetch(`http://${player.node.host}:${player.node.port}/decodetrack?track=${encodeURIComponent(player.track)}`, { headers: { Authorization: player.node.password } }).then(res => res.json());
    const parts = Math.floor((player.state.position / track.length) * 10);
    return {
      "embed": {
        "color": 16711680,
        "author": {
          "name": "Now Playing",
          "icon_url": client.user.avatarURL
        },
        "fields": [{
          "name": "ℹ️ Title:",
          "value": track.title ? track.title : "Unknown"
        },
        {
          "name": "🎤 Artist:",
          "value": track.author ? track.author : "Unknown"
        },
        {
          "name": "💬 Channel:",
          "value": this.message.channel.guild.channels.get(this.message.member.voiceState.channelID).name
        },
        {
          "name": `${"▬".repeat(parts)}🔘${"▬".repeat(10 - parts)}`,
          "value": `${day.duration(player.state.position).format("m:ss", { trim: false })}/${track.isStream ? "∞" : day.duration(track.length).format("m:ss", { trim: false })}`
        }]
      }
    };
  }

  static description = "Shows the currently playing song";
  static aliases = ["playing", "np"];
}

module.exports = NowPlayingCommand;