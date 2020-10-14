exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
    console.log(`${message.author.tag} did ping command!`);
}