"use client";

import { Logo } from "@/components/layouts/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isProfilePage = pathname?.startsWith("/profile");

  return (
    <nav className={cn(isProfilePage && "border-b border-border")}>
      <div className="section-padding">
        <div className="flex h-24 items-center">
          {/* Logo - Left */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Navigation Links - Center */}
          <div className="flex items-center gap-12 text-foreground/60">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === "/" && "text-primary"
              )}
            >
              Home
            </Link>
            <Link
              href="/lost"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname?.startsWith("/lost") && "text-primary"
              )}
            >
              Lost Items
            </Link>
            <Link
              href="/found"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname?.startsWith("/found") && "text-primary"
              )}
            >
              Found Items
            </Link>
            <Link
              href="/report"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname?.startsWith("/report") && "text-primary"
              )}
            >
              Report
            </Link>
            <Link
              href="/profile"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                isProfilePage && "text-primary"
              )}
            >
              Profile
            </Link>
          </div>

          {/* Buttons - Right */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

