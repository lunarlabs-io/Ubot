exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    var username = message.author.username;
    if (message.member.displayName === "Uni") {
        return message.channel.send({embed: {
                color: 3447003,
                title: ":white_check_mark:",
                description: "Your nickname is Uni! #UniSquad"
            }
        })}
    if (username === "Uni") {
    return message.channel.send({
        embed: {
            color: 3447003,
            title: ":white_check_mark:",
            description: "Your username is Uni! #UniSquad!"
        }})}
        else {
        return message.channel.send({
            embed: {
                color: 3447003,
                title: ":x:",
                description: "Your name is not Uni!"
            }
        })}
    };