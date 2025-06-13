export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        console.log("🔧 Server monitoring initialized");

        // Monitoring mémoire serveur
        const logMemoryUsage = () => {
            const memUsage = process.memoryUsage();
            console.log("💾 Server Memory:", {
                rss: Math.round(memUsage.rss / 1024 / 1024) + "MB",
                heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + "MB",
                heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + "MB",
            });
        };

        // Log initial
        logMemoryUsage();

        // Log périodique (toutes les 30 secondes)
        setInterval(logMemoryUsage, 30000);
    }
}
