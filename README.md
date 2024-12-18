# Simple Discord Bot Framework
A simple discord bot framework that is flexible and built to your needs. Built to run on Discord.JS v14.
## Dependencies
- NodeJS v16 or above
- Any code editor of your choice (or text file editor if you prefer that)

## Getting Started
To get started writing your discord bot with this framework, install the required dependencies above.  
Please create a discord bot user at the [Discord Developers](https://discord.com/developers/applications) page and fetch your application's token. **You will need this to authenticate your bot user!**
### Warning!
Do not share your bot token to **anyone** or share it publicly in your code! 
This is your authentication token to allow your application to interact with discord's api directly, therefore it is your responsibility to ensure it is securely stored. I will not offer help for these instances.  
If you feel that your bot's token has been leaked, please reset it immediately at the discord developers dashboard.

## F.A.Q.
### NodeJS "node" command is not recognised
You have either not installed NodeJS or your PATH env variable has not been setup correctly. Please try uninstalling and reinstalling NodeJS.
### The bot fails to start-up properly. What do I do?
Check the console or logs for errors and ensure your code is free of syntax errors. If all else fails reinstall your dependencies by running `npm clean-install` or delete the `node_modules` folder and run `npm install` to setup your environment again.
### I have tried the above step, but my bot still refuses to start-up correctly!
If reinstalling fails and you are sure there is a problem with the framework, please leave an issue ticket and I will get back to you as soon as possible.
### Can I contribute to provide bug fixes, patches, or make feature requests?
Yes you can! In fact this is highly encouraged to help assist in improving this custom framework. 
Feel free to offer assistance with an issue ticket or create a pull request with the relevant code to be reviewed.  
I do however ask that you only use pull requests for feature requests or urgent patches as not all requests may be possible or may only be unique to your use-case. If you are unsure of this, please create an issue ticket and I'll get back to you as soon as I can.