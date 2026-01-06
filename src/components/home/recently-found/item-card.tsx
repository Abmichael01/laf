/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ItemCardProps = {
  title: string;
  image: string;
  location: string;
  status: string;
  href?: string;
  className?: string;
};

export function ItemCard({
  title,
  image,
  location,
  status,
  href = "#",
  className,
}: ItemCardProps) {
  return (
    <div
      className={cn(
        "relative aspect-[3/4] w-72 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-xl",
        className,
      )}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 space-y-3 px-5 pb-5 text-white">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-white/70">{location}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-xs uppercase tracking-wide text-white/60">
            {status}
          </p>
        </div>
        <Button asChild size="sm" className="w-full">
          <Link href={href}>View Item</Link>
        </Button>
      </div>
    </div>
  );
}

