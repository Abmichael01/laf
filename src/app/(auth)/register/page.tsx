import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layouts/logo";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <Logo />
        <h1
          className="mt-6 text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          Create an account
        </h1>
        <p className="mt-2 text-muted-foreground">
          Get started by creating your account
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              className="h-12 bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="h-12 bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              required
              className="h-12 bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              required
              className="h-12 bg-white"
            />
          </div>
        </div>

        <Button type="submit" className="w-full h-12" size="lg">
          Create account
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

