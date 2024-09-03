/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ["cdn.builder.io"],
    },
};

export default nextConfig;
