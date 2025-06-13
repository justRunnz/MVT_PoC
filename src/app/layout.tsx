import type { Metadata } from "next";
import "./style.css";
import { I18NProvider } from "@/core/i18n/i18n-provider";
import { EnvProvider } from "@/core/providers/env-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import PerformanceMonitor from "@/app/components/PerformanceMonitor";

export const metadata: Metadata = {
    title: "TakeCareAI",
    description:
        "Meet Andrew, the first AI medical doctor, and browse the whole app to take care of your physical and mental health.",
    icons: { icon: "/icon.webp" },
    openGraph: {
        title: "TakeCareAI",
        description:
            "Meet Andrew, the first AI medical doctor, and browse the whole app to take care of your physical and mental health.",
        type: "website",
        images: "/preview-image.webp",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <EnvProvider config={JSON.stringify(process.env)}>
                    <I18NProvider>{children}</I18NProvider>
                    <PerformanceMonitor />
                    <SpeedInsights />
                    <Analytics />
                </EnvProvider>
            </body>
        </html>
    );
}
