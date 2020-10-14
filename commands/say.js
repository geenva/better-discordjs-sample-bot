exports.run = (client, message, args) => {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
    console.log(`${message.author.tag} said ${text}`);
}