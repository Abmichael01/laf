"use client";

import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  item: string;
  story: string;
  rating: number;
  date: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    item: "Vintage Watch",
    story:
      "I lost my grandfather's watch at the airport. Thanks to Findr., a kind stranger found it and returned it within 2 days. Forever grateful!",
    rating: 5,
    date: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "2",
    name: "Michael Chen",
    item: "Laptop Bag",
    story:
      "Left my laptop bag in a coffee shop. Someone reported it found on Findr. and I got it back the same evening. This platform is amazing!",
    rating: 5,
    date: "5 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    item: "Wedding Ring",
    story:
      "I thought I'd never see my wedding ring again after losing it at the park. Findr. connected me with the person who found it. Tears of joy!",
    rating: 5,
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "4",
    name: "David Thompson",
    item: "Camera Equipment",
    story:
      "As a photographer, losing my camera gear was devastating. Found it through Findr. within 24 hours. The community here is incredible.",
    rating: 5,
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "5",
    name: "Lisa Park",
    item: "Designer Handbag",
    story:
      "My favorite handbag was left in a taxi. I posted on Findr. and the driver found my post. Got it back the next day! So thankful.",
    rating: 5,
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "6",
    name: "James Wilson",
    item: "Guitar",
    story:
      "Lost my acoustic guitar after a gig. Someone found it and posted on Findr. The verification process was smooth and I got it back safely.",
    rating: 5,
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "7",
    name: "Maria Garcia",
    item: "Phone & Wallet",
    story:
      "Lost both my phone and wallet together. Found them both through Findr. The person who found them was so kind and helpful throughout.",
    rating: 5,
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "8",
    name: "Robert Kim",
    item: "Bicycle",
    story:
      "My bike was stolen but someone found it abandoned and posted on Findr. Got it back in perfect condition. This platform works!",
    rating: 5,
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "9",
    name: "Amanda White",
    item: "Diamond Necklace",
    story:
      "Lost my grandmother's necklace at a wedding. Posted on Findr. and a guest found it. The sentimental value made this reunion extra special.",
    rating: 5,
    date: "4 weeks ago",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "10",
    name: "Chris Martinez",
    item: "Gaming Console",
    story:
      "Left my console at a friend's house and forgot where. Found it through Findr. when they posted it. Quick and easy process!",
    rating: 5,
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "11",
    name: "Jessica Lee",
    item: "Designer Sunglasses",
    story:
      "Lost my expensive sunglasses at the beach. Someone found them and posted on Findr. Got them back the same day. Amazing service!",
    rating: 5,
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "12",
    name: "Daniel Brown",
    item: "Smartwatch",
    story:
      "My smartwatch fell off during a run. Found it through Findr. when a jogger posted it. The GPS feature helped verify it was mine!",
    rating: 5,
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-3xl border bg-white/5 p-6 backdrop-blur-xl flex-shrink-0 shadow-md shadow-black/10">
      <div className="flex items-center gap-2 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        "{testimonial.story}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover border border-border"
          loading="lazy"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.item}</p>
        </div>
        <span className="text-xs text-muted-foreground">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
}

function ScrollColumn({
  testimonials: columnTestimonials,
  animationDuration,
  animationDelay = 0,
}: {
  testimonials: Testimonial[];
  animationDuration: number;
  animationDelay?: number;
}) {
  // Duplicate for seamless loop
  const duplicated = [...columnTestimonials, ...columnTestimonials];

  return (
    <div 
      className="relative h-[500px] overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >

      {/* Scrollable content */}
      <div
        className="flex flex-col gap-3"
        style={{
          animation: `scroll-up ${animationDuration}s linear infinite`,
          animationDelay: `${animationDelay}s`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {duplicated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export function SuccessStories() {
  // Split testimonials into 3 columns
  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4, 8);
  const column3 = testimonials.slice(8, 12);

  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex flex-col gap-2 rounded-lg border-dashed border-primary py-2 text-2xl font-poppins w-fit mx-auto">
            Success Stories
            <div className="h-1 w-1/2 bg-primary rounded-full mx-auto" />
          </div>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-hero)" }}
          >
            Real Reunions, Real Joy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Findr. has helped people reunite with their lost items.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center max-w-5xl mx-auto">
          <div className="flex-1 rounded-3xl  border-border bg-white/5 backdrop-blur-xl overflow-hidden">
            <ScrollColumn
              testimonials={column1}
              animationDuration={22}
              animationDelay={0}
            />
          </div>
          <div className="flex-1 rounded-3xl  border-border bg-white/5 backdrop-blur-xl overflow-hidden">
            <ScrollColumn
              testimonials={column2}
              animationDuration={30}
              animationDelay={5}
            />
          </div>
          <div className="flex-1 rounded-3xl border-border bg-white/5 backdrop-blur-xl overflow-hidden">
            <ScrollColumn
              testimonials={column3}
              animationDuration={26}
              animationDelay={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

