import HeroGrid from "@/components/heroGrid";
import HomeReveal from "@/components/homeReveal";
import { Button } from "@/components/ui/button";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Welcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tether - Welcome</title>
      </Head>
      <main className="relative">
        <HeroGrid />
        <div className="absolute right-0 top-0 flex p-2 hr:gap-4 hr:p-8">
          <Button variant="link" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </main>
      <HomeReveal />
    </>
  );
};

export default Welcome;
