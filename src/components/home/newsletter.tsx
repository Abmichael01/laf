"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="section-padding py-20">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border-2 border-white/20 bg-white/5 p-8 md:p-12 backdrop-blur-xl overflow-hidden isolate relative"
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(243,244,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(243,244,246,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px, 20px 20px',
          }}
        >
          {/* Fade overlay from center to edges */}
          <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, transparent 35%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.9) 100%)',
            }}
          />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-lg shadow-primary/10">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <div className="flex flex-col gap-2 rounded-lg border-dashed border-primary py-2 text-2xl font-poppins w-fit mx-auto mb-4">
                Newsletter
                <div className="h-1 w-1/2 bg-primary rounded-full mx-auto" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-hero)" }}
              >
                Stay Updated
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Subscribe to get notified when new items are found or reported
                lost. Never miss a chance to reunite with your belongings.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 h-14 text-base rounded-full border bg-white/10 backdrop-blur-sm focus:border-primary/50 transition-colors"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="h-14 px-10 rounded-full text-base font-semibold"
              >
                {isSubmitting
                  ? "Subscribing..."
                  : isSubmitted
                    ? "Subscribed!"
                    : "Subscribe"}
              </Button>
            </form>

            {isSubmitted && (
              <p className="text-center text-sm text-primary mt-4">
                Thank you for subscribing! You'll receive notifications for new
                items.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

