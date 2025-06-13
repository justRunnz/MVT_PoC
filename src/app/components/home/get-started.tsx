"use client";

import { t } from "@/core/i18n/i18n";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AppStoreLink, GooglePlayLink } from "../buttons";
import { useI18N } from "@/core/i18n/i18n-provider";

export const GetStarted: React.FC = () => {
    const { lang } = useI18N();
    return (
        <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            alignItems="center"
            width={{ xs: "100%", md: "98%" }}
            padding={{ xs: "1rem 0", md: "0" }}
            margin="auto"
            sx={{
                background:
                    'url("/images/get-started-bg.webp") center no-repeat',
                backgroundSize: "cover",
                borderRadius: { xs: "0", md: "30px" },
            }}
        >
            <Box display={{ xs: "none", md: "block" }}>
                <Image
                    src="/images/get-started.webp"
                    alt="hero-image"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "100%" }}
                    loading="lazy"
                />
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                gap={4}
                width="90%"
                margin="auto"
                padding={{
                    xs: "1rem",
                    md: "0rem",
                }}
            >
                <Typography
                    fontSize={{ xs: "30px", md: "55px" }}
                    fontWeight={700}
                    color="white"
                >
                    {t("home_get_started_title", lang)}
                </Typography>
                <Typography fontSize="1rem" color="white">
                    {t("home_get_started_text", lang)}
                </Typography>
                <Box display="flex" gap={4}>
                    <AppStoreLink />
                    <GooglePlayLink />
                </Box>
            </Box>
        </Box>
    );
};
