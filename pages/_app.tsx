import { Providers } from "@/components/blockchain";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Saira, Orbitron } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";

export const saira = Saira({
  weight: ["400", "700"], // You can specify the font weights you need
  subsets: ["latin"], // Specify the subsets
  variable: "--font-saira", // Optional: Set a CSS variable if you want to use the font in global styles
});

export const orbitron = Orbitron({
  weight: ["400", "700"], // You can specify the font weights you need
  subsets: ["latin"], // Specify the subsets
  variable: "--font-orbitron", // Optional: Set a CSS variable if you want to use the font in global styles
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
