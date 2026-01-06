"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Package, Search, FileText, Settings, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/profile", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile/post-found", label: "Post Found", icon: Package },
  { href: "/profile/post-lost", label: "Post Lost", icon: Search },
  { href: "/profile/my-items", label: "My Items", icon: FileText },
  { href: "/profile/settings", label: "Settings", icon: Settings },
];

export function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="section-padding py-4 sm:py-6 lg:py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Profile Section */}
          <div className="w-full lg:flex-1 lg:min-w-0 bg-white rounded-md border border-border shadow-sm">
            {/* Header with User Info */}
            <div className="border-b border-border px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16 border border-border flex-shrink-0">
                  <AvatarImage
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                    alt="John Doe"
                  />
                  <AvatarFallback className="bg-muted text-foreground text-base sm:text-lg font-medium" style={{ fontFamily: "var(--font-poppins)" }}>
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h1 
                    className="text-lg sm:text-xl font-semibold mb-1 text-foreground"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    John Doe
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-border overflow-x-auto">
              <nav className="flex gap-0 min-w-max sm:min-w-0 px-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || (item.href !== "/profile" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors border-b-2 -mb-px whitespace-nowrap",
                        isActive
                          ? "text-foreground border-primary"
                          : "text-muted-foreground border-transparent hover:text-foreground"
                      )}
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="hidden xs:inline">{item.label}</span>
                      <span className="xs:hidden">{item.label.split(" ")[0]}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <main className="p-4 sm:p-6 lg:p-8">{children}</main>
          </div>
          
          {/* Ads Section - Completely Separate */}
          <aside className="w-full lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-8">
            <div className="rounded-md border border-border bg-white p-4 sm:p-6 shadow-md">
              <h3 
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Advertisement
              </h3>
              <div className="space-y-4">
                {/* Ad Placeholder 1 */}
                <div className="rounded-md border border-border bg-white/5 p-4 sm:p-6 h-48 sm:h-64 flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center" style={{ fontFamily: "var(--font-poppins)" }}>
                    Ad Space
                    <br />
                    300x250
                  </p>
                </div>
                
                {/* Ad Placeholder 2 */}
                <div className="rounded-md border border-border bg-white/5 p-4 sm:p-6 h-48 sm:h-64 flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center" style={{ fontFamily: "var(--font-poppins)" }}>
                    Ad Space
                    <br />
                    300x250
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

