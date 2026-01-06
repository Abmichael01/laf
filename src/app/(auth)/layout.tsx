import { CloudedIcon } from "@/components/home/clouded-icon";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Clouded Icons */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-white overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          {/* Top Text */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-hero)" }}
            >
              Reuniting Lost Items
            </h2>
            <p className="text-base text-muted-foreground max-w-md">
              Join thousands of people helping each other find what matters most
            </p>
          </div>

          {/* Grid of Clouded Icons - 2 per row */}
          <div className="grid grid-cols-2 gap-8 max-w-lg">
            <CloudedIcon
              badge="Lost"
              imageSrc="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80"
              imageAlt="Lost wristwatch"
              className="relative"
            />
            <CloudedIcon
              badge="Found"
              imageSrc="https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=500&q=80"
              imageAlt="Found wallet"
              className="relative"
            />
            <CloudedIcon
              badge="Found"
              imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80"
              imageAlt="Found keys"
              className="relative"
            />
            <CloudedIcon
              badge="Lost"
              imageSrc="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=500&q=80"
              imageAlt="Lost backpack"
              className="relative"
            />
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Trusted by thousands • Secure & Private • Free to use
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 lg:w-1/2 flex items-center  justify-center p-8 bg-background overflow-y-auto h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}

