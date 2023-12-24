import { shuffle } from "@/lib/utils";
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Masonry } from "react-plock";

const Home: NextPage = () => {
  const [images] = useState(
    shuffle(Array.from({ length: 15 }).map((_, i) => `hero-${i + 1}.jpg`)),
  );
  return (
    <>
      <Head>
        <title>Tether</title>
      </Head>
      <main className="pad-x">
        <Masonry
          className=""
          items={images}
          config={{
            columns: [2, 3, 5],
            gap: [4, 8, 16],
            media: [640, 768, 1024],
          }}
          render={(image, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={`/media/${image}`}
              alt={`hero-${i + 1}`}
              className="h-auto w-full"
            />
          )}
        />
      </main>
    </>
  );
};

export default Home;
