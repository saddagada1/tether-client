import Head from "next/head";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Tether - Content curated by your friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen max-h-screen font-sans">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
