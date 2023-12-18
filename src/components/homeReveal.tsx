import { shuffle } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const HomeReveal: React.FC = ({}) => {
  const figures = useMemo(() => {
    const images = Array.from({ length: 15 }).map(
      (_, i) => `hero-${i + 1}.jpg`,
    );
    return shuffle(images);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(
        ".hero",
        {
          scale: 1,
          stagger: {
            each: 0.15,
          },
          delay: 1,
        },
        "init",
      )
        .to(
          ".hero-text-1",
          {
            opacity: 1,
            y: "+=20",
            delay: 2,
          },
          "init",
        )
        .to(
          ".hero-text-2",
          {
            opacity: 1,
            y: "-=20",
            delay: 3,
          },
          "init",
        )
        .to(".hero-bg", { scaleY: 1, ease: "circ.inOut" }, "init>+=0.5")
        .to(
          ".hero-cover",
          {
            scaleY: 1,
            ease: "circ.inOut",
          },
          "init>+=0.5",
        )
        .set(".hero-cover", { transformOrigin: "center" }, ">")
        .to(
          ".hero-cover",
          { rotate: "45deg", scale: 5, ease: "expo.in" },
          "+=0.5",
        )
        .to(".hero-logo", { fontSize: "+=3rem", ease: "expo.in" }, "<")
        .to(".hero-logo", { fontSize: "+=2rem", ease: "expo.out" }, ">")
        .to(".hero-root", { opacity: 0 }, ">")
        .set(".hero-root", { display: "none" }, ">");
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="hero-root fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      <h1 className="h2 hero-text-1 absolute flex h-full w-full -translate-y-1/3 items-center justify-center opacity-0 will-change-transform hr:-translate-x-1/3 hr:-translate-y-5">
        Not a social media.
      </h1>
      <h1 className="h2 hero-text-2 absolute flex h-full w-full translate-y-1/3 items-center justify-center opacity-0 will-change-transform hr:translate-x-1/3 hr:translate-y-5">
        Not a messenger.
      </h1>
      <div className="hero-bg h-full w-full origin-top scale-y-0 bg-foreground will-change-transform" />
      {figures.map((src, i) => (
        <figure
          key={i}
          className="hero absolute z-10 h-1/3 w-1/2 scale-0 will-change-transform hr:h-1/2 hr:w-1/4"
        >
          <Image
            priority
            src={`/media/${src}`}
            alt={`hero-${i + 1}`}
            fill
            className="object-cover"
          />
        </figure>
      ))}
      <div className="hero-cover absolute z-20 h-1/3 w-1/2 origin-bottom scale-y-0 bg-background will-change-transform hr:h-1/2 hr:w-1/4" />
      <h1 className="hero-logo absolute z-30 text-5xl font-bold tracking-tight text-destructive hr:text-[10rem]">
        tether
      </h1>
    </div>
  );
};
export default HomeReveal;
