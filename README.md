# GDPS-Bot
a GDPS bot that ive been working on, i thought id make it public

# What does this GDPS Bot do?
This GDPS Bot currently has 2 main commands

  - profile
  - level
  
  these commands fetch information from your GDPS and displays them in a discord embed as shown in the examples below

![profile command example](https://cdn.discordapp.com/attachments/707934709178695701/757327658446225489/unknown.png)
![level command example](https://cdn.discordapp.com/attachments/707934709178695701/757327745519845477/unknown.png)

# setup
firstly, you need to configure the config which can be found [here](https://github.com/Wyliemaster/GDPS-Bot/blob/master/botsettings.json). the image below shows the important parts of the config.

- The bot token is what is used to make your bot work on discord
- The Prefix is what you use to use commands ``x!profile``, ``x!level``
- the server is what server the bot works for.

![config](https://cdn.discordapp.com/attachments/707934709178695701/757328595285704774/unknown.png)

# Emotes

to get emotes working on the bot, you will need to add them yourself. upload the emotes you want to use then you use ``\emote`` to find the ID of your emote

![how to find emote IDs](https://cdn.discordapp.com/attachments/707934709178695701/757331811675144292/unknown.png)

once you get the emoteID of the emote you want to add, all you do is copy and paste it into the config and it will work once you use the bot

![emote config](https://cdn.discordapp.com/attachments/707934709178695701/757332054600843394/unknown.png)


# getting the bot online

The setup is quite easy. just upload this repository on your github account with the settings configured then you use [heroku to host the bot.](https://www.youtube.com/watch?v=8qIsRzV0Hpg)