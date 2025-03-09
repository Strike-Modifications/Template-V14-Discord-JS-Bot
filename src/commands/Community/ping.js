const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const botConfig = require('../../config/bot.json');
const embedsConfig = require('../../config/embeds.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with the bot latency and API ping information'),
    
    async execute(interaction, client) {
        // Defer the reply to have time to calculate the ping
        await interaction.deferReply();
        
        // Calculate the bot latency (time between when the command was received and now)
        const sent = await interaction.fetchReply();
        const botLatency = sent.createdTimestamp - interaction.createdTimestamp;
        
        // Get API latency (WebSocket ping)
        const apiLatency = client.ws.ping;
        
        // Create the embed using configs
        const pingEmbed = new EmbedBuilder()
            .setAuthor({ name: embedsConfig.AuthorName, iconURL: embedsConfig.AuthorIcon })
            .setThumbnail(embedsConfig.ServerIcon)
            .setColor(embedsConfig.Color)
            .setTitle('🏓 Pong!')
            .setDescription(`Here are the current ping statistics for ${botConfig.ReadyMessage}:`)
            .addFields(
                { name: 'Bot Latency', value: `${botLatency}ms`, inline: true },
                { name: 'API Latency', value: `${apiLatency}ms`, inline: true }
            )
            .setFooter({ text: embedsConfig.FooterText, iconURL: embedsConfig.FooterIcon });
            
        // Add timestamp if enabled in config
        if (embedsConfig.Timestamp) {
            pingEmbed.setTimestamp();
        }
        
        // Edit the deferred reply with the ping embed
        await interaction.editReply({ embeds: [pingEmbed] });
    },
};
