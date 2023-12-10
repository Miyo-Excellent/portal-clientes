/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "purdyseguros.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
