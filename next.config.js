// @ts-nocheck

/** @type {import('next').NextConfig} */




const nextConfig = {

  reactStrictMode: true,

  swcMinify: true,

  compiler: {

    removeConsole: process.env.NODE_ENV !== 'development',

  },

  typescript: {

    ignoreBuildErrors: true,

  },

  eslint: {

    ignoreDuringBuilds: true,

  },

  // images: {

  //  domains: ['xsgames.co', 'unsplash.com'],

  // },




  // i18n: {

  //    locales: ["en"],

  //    defaultLocale: "en",

  //  },

};


const withPWA = require('next-pwa')({
  dest: 'public',
   disable: process.env.NODE_ENV === 'development',
   register: true,
   scope: '/app',
   sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // next.js config
})



 

module.exports = withPWA(nextConfig);







// const withBundleAnalyzer = require('@next/bundle-analyzer')({

//   enabled: process.env.ANALYZE === 'true',

// });




// module.exports = withBundleAnalyzer(nextConfig)