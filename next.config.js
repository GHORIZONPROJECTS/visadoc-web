/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // images: {
    //   loader: 'custom',
    //   loaderFile: './my-loader.ts',
    // },
    images: {
      unoptimized: true,
    },
  }
   
  module.exports = nextConfig