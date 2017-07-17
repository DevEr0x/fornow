/*
Copyright (C) <2017> <jimmybot@teknik.io> & <Eric Mazza>

This program is free software: you can redistribute it and/or modify 
it under the terms of the GNU Affero General Public License as published by 
the Free Software Foundation, either version 3 of the License, or 
(at your option) any later version.

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License 
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// JimmyBot & Er0x' discord.js project
// https://git.teknik.io/jimmybot/discord.js-project

// jshint esversion: 6 

var secret = process.env.NODE_SECRET;
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(secret);
const commandStart = ">";

bot.on('ready', () => {
    console.log("It's gucci");
});

bot.on('message', message => {
    if (!message.content.startsWith(commandStart)) return;
    if (message.guild === null) return;
    if (message.author.equals(bot.user)) return;

    var command = message.content.split(" ")[0];
    command = command.slice(commandStart.length);

    if (command === "") return;

    /* 
    (jimmybot@teknik.io) "This command is throwing a linter error, commented out for now."
    command == command.toLocaleLowerCase();
    */

    if (command === 'ping') {
        var botPing = Math.floor(bot.ping);
        message.channel.send('Pong! `' + botPing + "ms`");
    }


    if (command === 'suh') {
        message.channel.send('dood');
    }

    if (command === 'avatar') {
        var grab = message.guild.member(message.mentions.users.first());
        var avatarGrab = null;
        if (!grab) {
            avatarGrab = message.author.avatarURL;
            message.channel.send("Here's your avatar: \n" + avatarGrab);
        } else {
            avatarGrab = grab.user.avatarURL;
            message.channel.send("Here's the avatar you requested: \n" + avatarGrab);
        }
    }

    if (command === 'discord') {
        message.channel.send("***MODERN C++***");
    }

    if (command === 'help') {
        message.channel.send("All commands use the prefix: `>` \n" +
            "Ping - Pings the bot \nSuh - Dood \nAvatar - Displays your avatar \nDiscord - kek \nHelp - This. \nUptime - You can guess this one\n");
    }

    if (command === 'uptime') {
        var botTime = 0;
        var hour = 0;
        var min = 0;
        var sec = 0;
        botTime = bot.uptime / 1000;
        if (botTime >= 60) {
            min = botTime / 60;
        }
        if (min >= 60) {
            hour = min / 60;
            min = min % 60;
        }
        sec = botTime % 60;
        min = Math.floor(min);
        sec = Math.floor(sec);
        hour = Math.floor(hour);
        if (hour == 0) {
            message.channel.send("Here's my uptime: " + min + " Minutes, " + sec + " Seconds.");
        } else {
            message.channel.send("Here's my uptime: " + hour + " Hours, " + min + " Minutes, " + sec + " Seconds.");
        }
    }
});

bot.on('message', message => {
    if (message.content === 'literally hitler') {
        message.channel.send('https://tknk.io/VAX1');
    }
});