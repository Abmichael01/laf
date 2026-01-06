import clsx from "clsx";
import { ReactNode } from "react";

interface CloudedIconProps {
  badge: "Lost" | "Found";
  className?: string;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export function CloudedIcon({
  badge,
  className,
  icon,
  imageSrc,
  imageAlt = "Lost and found item",
}: CloudedIconProps) {
  return (
    <div className={clsx("absolute animate-tilt-bounce", className)}>
      <div className="relative">
        <div className="absolute -top-3 left-1/2 z-20 flex -translate-x-1/2">
          <span
            className={clsx(
              "rounded-full px-4 py-1 text-xs font-semibold text-white shadow-md shadow-black/20",
              badge === "Lost" ? "bg-primary" : "bg-black/90",
            )}
          >
            {badge}
          </span>
        </div>
        <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl border border-white/20 bg-primary/5 shadow-lg shadow-black/20 backdrop-blur-xl">
          {imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover rounded-3xl"
              loading="lazy"
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-background/80 to-background" />
          <div className="absolute -bottom-12 left-1/2 h-[60%] w-[140%] -translate-x-1/2 pointer-events-none">
            <div className="absolute bottom-0 left-2 h-16 w-16 rounded-full bg-white" />
            <div className="absolute bottom-2 left-12 h-20 w-20 rounded-full bg-white" />
            <div className="absolute bottom-5 left-24 h-18 w-18 rounded-full bg-white" />
            <div className="absolute bottom-4 right-24 h-19 w-19 rounded-full bg-white" />
            <div className="absolute bottom-1 right-4 h-16 w-16 rounded-full bg-white" />
          </div>
          {!imageSrc && (
            <span className="relative z-20 text-4xl text-white drop-shadow-lg">
              {icon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

