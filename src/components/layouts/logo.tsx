import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "footer";
}

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "logo",
        variant === "footer" && "logo-footer"
      )}
    >
      Findr.
    </Link>
  );
}

