import { FileText, Search, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Report Lost/Found",
    description:
      "Submit details about your lost item or report an item you've found. Include photos, location, and description.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Match & Connect",
    description:
      "Our system automatically matches your report with similar items. Get notified when a potential match is found.",
    icon: Search,
  },
  {
    number: "03",
    title: "Reunite",
    description:
      "Connect with the other party, verify ownership, and arrange a safe return. Celebrate the reunion!",
    icon: Heart,
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex flex-col gap-2 rounded-lg border-dashed border-primary py-2 text-2xl font-poppins w-fit mx-auto">
            How It Works
            <div className="h-1 w-1/2 bg-primary rounded-full mx-auto" />
          </div>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-hero)" }}
          >
            Simple Steps to Reunite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your lost items back or helping others find theirs is just
            three steps away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-3xl border-2 border-white/20 bg-white/5 p-8 backdrop-blur-xl overflow-hidden isolate"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(243,244,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(243,244,246,0.45) 1px, transparent 1px)',
                  backgroundSize: '12px 12px, 12px 12px',
                }}
              >
                {/* Fade overlay from center to edges - transparent center, white edges */}
                <div 
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.8) 100%)',
                  }}
                />
                <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-primary mb-1">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 -translate-y-1/2 z-20">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary/30 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

