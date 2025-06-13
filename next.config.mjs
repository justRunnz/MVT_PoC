/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Fast minification with Rust-based compiler
    reactStrictMode: true, // Helps catch potential issues early
    compress: true, // Enables Gzip compression to reduce transfer size
    poweredByHeader: false, // Removes Next.js header to reduce metadata bloat
    images: {
        // formats: ['image/avif', 'image/webp', 'image/png', ], // Use modern image formats
        minimumCacheTTL: 60, // Encourage caching
    },
};

export default nextConfig;
