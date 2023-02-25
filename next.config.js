  const withPWA = require("next-pwa");

module.exports = withPWA({
    images: {
        domains: [ "cdn.discordapp.com" ]https://github.com/kdensa-bgbg/awardbot.me/blob/main/next.config.js
    },
    i18n: {
        locales: Object.keys(require("./locales.config.js")),
        defaultLocale: 'en',
        localeDetection: true,
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == "development"
    },
    async redirects() {
        return [
          {
            source: '/invite',
            destination: 'https://awardbot-demo.herokuapp.com/v1/invite/bot',
            permanent: true,
          },
        ]
      },
});
