/** @type {import('next').NextConfig} */
const nextConfig = {
    // "Proxy" setting in Next.js
    rewrites: async () => {
        return [
            {
                source: "/api/:path*", // old path
                destination: "/:path*", // new path
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
            },
            { protocol: "https", hostname: "images.unsplash.com", port: "" },
            { protocol: "http", hostname: "placekitten.com", port: "" },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
            },
        ],
    },
};
// $ npm config set proxy http://proxy:port
// $ npm config set https-proxy https://proxy:port
// $ npm config delete http-proxy
// $ npm config delete https-proxy

module.exports = nextConfig;
