import Link from "next/link";
import { Button } from "../ui/button";
import { CloudedIcon } from "./clouded-icon";

export function Hero() {
  return (
    <section className="section-padding relative py-20 pb-30">
      <CloudedIcon
        badge="Lost"
        imageSrc="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80"
        imageAlt="Lost wristwatch"
        className="hidden md:block absolute left-20 top-8"
      />
      <CloudedIcon
        badge="Found"
        imageSrc="https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=500&q=80"
        imageAlt="Found wallet"
        className="hidden sm:block absolute left-52 -bottom-4"
      />
      <CloudedIcon
        badge="Found"
        imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80"
        imageAlt="Found keyring"
        className="hidden lg:block absolute right-20 top-16"
      />
      <CloudedIcon
        badge="Lost"
        imageSrc="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=500&q=80"
        imageAlt="Lost backpack"
        className="hidden lg:block absolute right-60 -bottom-6"
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          Find Your Lost Items
          <br />
          <span className="text-primary">Help Others Find Theirs</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Findr. connects people who have lost items with those who have found
          them. Together, we make lost and found simple.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/report">Report Lost Item</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/found">Browse Found Items</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

