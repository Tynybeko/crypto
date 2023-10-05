/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
})

const nextConfig = withPWA({
    env: {
        BOT_API: process.env.BOT_API,
        COIN_API: process.env.COIN_API
    }
})

module.exports = nextConfig
