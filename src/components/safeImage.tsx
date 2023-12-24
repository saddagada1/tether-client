import Image from "next/image";
import { type HTMLAttributes, useState } from "react";
import { randomBytes } from "crypto";
import { cn } from "@/lib/utils";
import Avatar from "boring-avatars";

const fallbackAlt = randomBytes(32).toString();

interface SafeImageProps extends HTMLAttributes<HTMLDivElement> {
  url?: string | null;
  alt?: string;
  width: number;
  square?: boolean;
}

const SafeImage: React.FC<SafeImageProps> = ({
  url,
  alt,
  width,
  square,
  ...props
}) => {
  const { className, style, ...rest } = props;
  const [error, setError] = useState(false);

  return (
    <div
      style={{ width, ...style }}
      {...rest}
      className={cn(
        "relative aspect-square",
        square ? "rounded-md" : "rounded-full",
        className,
      )}
    >
      {url && !error ? (
        <Image
          unoptimized
          src={url}
          alt={alt ?? fallbackAlt}
          sizes={`${width}px`}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <Avatar size={width} square={square} name={alt ?? fallbackAlt} />
      )}
    </div>
  );
};
export default SafeImage;
