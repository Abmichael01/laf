import { ProfileLayout } from "@/components/profile/profile-layout";
import { MyItemsContent } from "./pageClient";
import { Package, Search } from "lucide-react";

export default function MyItemsPage() {
  return (
    <ProfileLayout>
      <div>
        <h1
          className="text-3xl font-medium tracking-tight mb-2"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          My Items
        </h1>
        <p className="text-muted-foreground mb-8">
          Manage your posted found and lost items.
        </p>
        <MyItemsContent />
      </div>
    </ProfileLayout>
  );
}

