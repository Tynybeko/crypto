/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
})

const nextConfig = withPWA({
    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru'
    },
    env: {
        BOT_API: process.env.BOT_API,
        COIN_API: process.env.COIN_API
    }
})

module.exports = nextConfig
