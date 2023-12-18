import { cn } from "@/lib/utils";
import gsap from "gsap";
import { type HTMLAttributes, useEffect } from "react";

interface LogoProps extends HTMLAttributes<HTMLHeadingElement> {
  identifier: string;
}

const Logo: React.FC<LogoProps> = ({ identifier, ...props }) => {
  const { className, ...rest } = props;
  useEffect(() => {
    const ctx = gsap.context(() => {
      const logoTimeline = gsap.timeline();

      logoTimeline.to(`.${identifier}`, {
        fontWeight: "random(100, 900, 1)",
        ease: "expo.inOut",
        duration: 5,
        delay: 10,
        repeat: -1,
        repeatRefresh: true,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <h1
      {...rest}
      className={cn(
        "text-[8rem] font-bold tracking-tight text-destructive hr:text-[15rem]",
        identifier,
        className,
      )}
    >
      tether
    </h1>
  );
};

export default Logo;
