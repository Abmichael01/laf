import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, Search, FileText } from "lucide-react";
import { StatCard } from "@/components/profile/stat-card";
import { ProfileLayout } from "@/components/profile/profile-layout";

export default function ProfilePage() {
  return (
    <ProfileLayout>
      <h1
        className="text-3xl font-medium tracking-tight mb-4"
        style={{ fontFamily: "var(--font-hero)" }}
      >
        Dashboard
      </h1>
      <p className="text-muted-foreground mb-8">
        Welcome to your profile dashboard. Manage your lost and found items from here.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<Package className="h-5 w-5 text-primary" />}
          label="Found Items"
          value={0}
        />
        <StatCard
          icon={<Search className="h-5 w-5 text-primary" />}
          label="Lost Items"
          value={0}
        />
        <StatCard
          icon={<FileText className="h-5 w-5 text-primary" />}
          label="Total Posts"
          value={0}
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="flex-1">
            <Link href="/profile/post-found">Post Found Item</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/profile/post-lost">Post Lost Item</Link>
          </Button>
        </div>
      </div>
    </ProfileLayout>
  );
}

