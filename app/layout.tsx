import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import envs from "@/lib/envs";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soller | Solar Energy Solutions",
  description:
    "Harness the power of the sun to reduce your energy bills and carbon footprint with Soller - a leading solar energy provider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Solar Energy, Renewable Energy, Solar Power, Solar Panels, Solar Installation, Green Energy, Sustainable Energy, Soller"
        />
        <meta
          name="description"
          content="Soller offers efficient solar energy solutions to power homes and businesses. Reduce your energy bills and carbon footprint by harnessing renewable solar power."
        />
        <meta property="og:title" content="Soller | Solar Energy Solutions" />
        <meta
          property="og:description"
          content="Discover how Soller can help you save on energy costs with our advanced solar panels and clean energy solutions."
        />
        <meta property="og:image" content={`${envs.clientUrl}/logo.svg`} />
        <meta property="og:url" content={envs.clientUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soller | Solar Energy Solutions" />
        <meta
          name="twitter:description"
          content="Harness renewable energy with Soller. Our solar panels and sustainable energy solutions are designed to save you money and help the environment."
        />
        <meta name="twitter:image" content={`${envs.clientUrl}/logo.svg`} />
        <link rel="canonical" href={envs.clientUrl} />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${roboto.className}  antialiased`}>{children}</body>
    </html>
  );
}
