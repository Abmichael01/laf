/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ItemCard } from "./item-card";

type FoundItem = {
  id: string;
  title: string;
  description: string;
  location: string;
  status: "Pending Claim" | "In Review" | "Ready for Pickup";
  images: string[];
};

const recentlyFoundItems: FoundItem[] = [
  {
    id: "fnd-001",
    title: "Brown Leather Wallet",
    description:
      "Contains multiple ID cards and travel receipts. Picked up near Grand Hall cafeteria on 4th Feb, 3:10 PM.",
    location: "Grand Hall Cafeteria",
    status: "Pending Claim",
    images: [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "fnd-002",
    title: "Noise Cancelling Headphones",
    description:
      "Matte black headphones left in the South Wing study room. Includes protective case.",
    location: "South Wing Study Room",
    status: "Ready for Pickup",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "fnd-003",
    title: "Graphite Reading Glasses",
    description:
      "Lightweight graphite frame with subtle gold trims. Recovered from Library lobby sofa.",
    location: "North Library Lobby",
    status: "In Review",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "fnd-004",
    title: "Canvas Tote Bag",
    description:
      "Striped tote containing sketchbooks and markers. Collected from Design Studio bench.",
    location: "Design Studio",
    status: "Pending Claim",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "fnd-005",
    title: "Silver Bracelet",
    description:
      "Engraved bracelet with initials ‘A.R’. Returned by security at the main entrance.",
    location: "Main Lobby",
    status: "Ready for Pickup",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "fnd-006",
    title: "Portable Charger",
    description:
      "Dark gray 20,000mAh power bank found near the innovation lab charging station.",
    location: "Innovation Lab",
    status: "In Review",
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export function RecentlyFoundSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-28 pb-20">
      <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-col gap-2 rounded-lg  border-dashed border-primary py-2 text-2xl font-poppins w-fit">
              Recently Found Items
              <div className="h-1 w-1/2 bg-primary rounded-full" />
            </div>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "var(--font-hero)" }}
            >
              Items awaiting pickup
            </h2>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              Browse through items that have been turned in this week. Tap on
              any card to see full details and next steps to claim ownership.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => scrollBy("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => scrollBy("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth py-6"
        >
          {recentlyFoundItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              image={item.images[0]}
              location={item.location}
              status={item.status}
              href={`/found/${item.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

