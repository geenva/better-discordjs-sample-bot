exports.run = (client, message, args) => {
    message.channel.send("Current commands: \n`!ping`\n`!say`").catch(console.error);
    console.log(`${message.author.tag} did help command!`);
}