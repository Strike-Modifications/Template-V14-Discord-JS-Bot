const botConfig = require('../config/bot.json');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(botConfig.ReadyMessage);
        console.log('\x1b[32m%s\x1b[0m', 'Basic Starter Discord Bot Created By: ryland_oh on discord if you need support feel free to dm ryland_oh. Enjoy !');
        
        const presenceTypes = {
            0: 'online',
            1: 'idle',
            2: 'dnd',
            3: 'invisible'
        };
          try {
              // First clear any existing presence
              await client.user.setPresence({ activities: [], status: 'invisible' });

              // Then set the new presence after a short delay
              setTimeout(async () => {
                  await client.user.setPresence({
                      activities: [
                          {
                              name: botConfig.Status.text,
                              type: botConfig.Status.type,
                          },
                      ],
                      status: presenceTypes[botConfig.presence]
                  });
              }, 1000);
          } catch (error) {
              console.error(error);
          }
      },
};
