const { Client, EmbedBuilder } = require('discord.js');
const botConfig = require('../config/bot.json');
const embedsConfig = require('../config/embeds.json');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const presenceTypes = {
            0: 'Online',
            1: 'Idle',
            2: 'Do Not Disturb',
            3: 'Invisible'
        };

        const startupEmbed = new EmbedBuilder()
            .setAuthor({ name: embedsConfig.AuthorName, iconURL: embedsConfig.AuthorIcon })
            .setThumbnail(embedsConfig.ServerIcon)
            .setColor(embedsConfig.Color)
            .setTitle('Bot Started Successfully!')
            .setDescription('Bot configuration and status details:')
            .addFields(
                { name: 'Client ID', value: `${botConfig.ClientID}` },
                { name: 'Guild ID', value: `${botConfig.GuildID || 'Not set'}` },
                { name: 'Status', value: `${botConfig.Status.text} (Type: ${botConfig.Status.type})` },
                { name: 'Presence', value: `${presenceTypes[botConfig.presence]}` },
                { name: 'Ready Message', value: `${botConfig.ReadyMessage}` }
            )
            .setTimestamp()
            .setFooter({ text: embedsConfig.FooterText });

        const channel = client.channels.cache.get(botConfig.StartupMessageChannel);
        if (channel) {
            channel.send({ embeds: [startupEmbed] });
        }
    }
};
