import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Theme } from "@/components/theme";
import Layout from "@/components/layout";

const sans = Inter({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Theme attribute="class" defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
};

export default MyApp;
