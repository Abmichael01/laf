import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layouts/logo";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <Logo />
        <h1
          className="mt-6 text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          Forgot password?
        </h1>
        <p className="mt-2 text-muted-foreground">
          Enter your email address and we'll send you a link to reset your
          password
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-4">
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
        </div>

        <Button type="submit" className="w-full h-12" size="lg">
          Send reset link
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

