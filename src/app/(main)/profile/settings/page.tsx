import { ProfileLayout } from "@/components/profile/profile-layout";
import { SettingsContent } from "./pageClient";

export default function SettingsPage() {
  return (
    <ProfileLayout>
      <div>
        <h1
          className="text-3xl font-medium tracking-tight mb-2"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          Settings
        </h1>
        <p className="text-muted-foreground mb-8">
          Manage your account settings and preferences.
        </p>
        <SettingsContent />
      </div>
    </ProfileLayout>
  );
}

