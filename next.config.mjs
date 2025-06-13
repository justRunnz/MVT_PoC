import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    swcMinify: true, // Fast minification with Rust-based compiler
    reactStrictMode: true, // Helps catch potential issues early
    compress: true, // Enables Gzip compression to reduce transfer size
    poweredByHeader: false, // Removes Next.js header to reduce metadata bloat
    images: {
        // formats: ['image/avif', 'image/webp', 'image/png', ], // Use modern image formats
        minimumCacheTTL: 60, // Encourage caching
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                ],
            },
        ];
    },
};

export default withBundleAnalyzer(nextConfig);
