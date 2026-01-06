import { Hero } from "@/components/home/hero";
import { RecentlyFoundSection } from "@/components/home/recently-found/recently-found";
import { HowItWorks } from "@/components/home/how-it-works";
import { SuccessStories } from "@/components/home/success-stories";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentlyFoundSection />
      <HowItWorks />
      <SuccessStories />
      <Newsletter />
    </div>
  );
}
