# V14-Discord-JS-Bot Setup Guide

Follow the guide below to get your bot started.

## Installation Steps

1. **Open CMD and Navigate to Your Directory**
   ```sh
   cd C:\Your\Path\Here\
   ```
2. **Initialize Your Project**
   ```sh
   npm init
   ```
   - Follow the prompts and configure as needed.
   - Ensure the entry point is set to:
     ```
     src/index.js
     ```
3. **Install Dependencies**
   ```sh
   npm install discord.js
   ```
   - Wait for the installation to complete.

4. **Configure Your Bot**
   - Open the bot folder and navigate to:
     ```
     src/config
     ```
   - Fill out both `bot.json` and `embeds.json`.
   - Save both files once done.

5. **Start Your Bot**
   - Run the `StartBot.bat` file.
   - Enjoy your bot and coding!

## Additional Information

- Refer to `Bot-Startup.js` to understand how to use the prefilled configurations for your events.
- Check `ping.js` in the `commands` folder for an example of command setup.

Happy Coding! 🎉
