import { shuffle } from "@/lib/utils";
import { useState } from "react";
import { Masonry } from "react-plock";
import Logo from "./logo";

const HeroGrid: React.FC = ({}) => {
  const [images] = useState(
    shuffle(Array.from({ length: 15 }).map((_, i) => `hero-${i + 1}.jpg`)),
  );

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <Masonry
        className="absolute h-full w-full"
        items={images}
        config={{
          columns: [2, 3, 5],
          gap: [48, 96, 192],
          media: [640, 768, 1024],
        }}
        render={(image, i) =>
          i === 1 ? (
            <div key={i} className="h-96 w-full hr:h-72" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={`/media/${image}`}
              alt={`hero-${i + 1}`}
              className="h-auto w-full"
            />
          )
        }
      />
      <div className="bg-radial-gradient" />
      <Logo identifier="home-logo" className="z-10" />
      <p className="h2 absolute translate-y-[4rem] pt-8 text-foreground hr:translate-y-[7.5rem]">
        Content curated by your friends.
      </p>
      <div className="grain opacity-10 mix-blend-overlay" />
    </div>
  );
};

export default HeroGrid;
