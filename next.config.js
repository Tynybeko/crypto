/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru'
    },
    env: {
        BOT_API: process.env.BOT_API
    }
}

module.exports = nextConfig
