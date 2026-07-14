import { Card } from "@/components/ui/card";

const leadershipData = [
  {
    organization: "IEEE CRFID Kerala Chapter",
    role: "Technical Coordinator & Web Master",
    duration: "2026 – Present",
    description:
      "Selected as Technical Coordinator & Web Master for the IEEE CRFID Kerala Chapter. Responsible for managing the chapter's technical initiatives, maintaining the web presence, collaborating with IEEE volunteers across Kerala, and supporting technical events and community engagement.",
    badge: "Leadership Role",
  },
];

const IeeeLogo = () => (
  <svg viewBox="0 0 512 512" className="w-8 h-8" fill="currentColor">
    <path d="M256 96c-88.366 0-160 71.634-160 160s71.634 160 160 160 160-71.634 160-160S344.366 96 256 96zm0 288c-70.692 0-128-57.308-128-128S185.308 128 256 128s128 57.308 128 128-57.308 128-128 128z" />
    <path d="M112 256c0-19.33 4.026-37.74 11.26-54.44l-26.52-13.26C87.86 209.74 82 232.34 82 256s5.86 46.26 14.74 67.7l26.52-13.26c-7.234-16.7-11.26-35.11-11.26-54.44zM400 256c0 19.33-4.026 37.74-11.26 54.44l26.52 13.26c8.88-21.44 14.74-44.04 14.74-67.7s-5.86-46.26-14.74-67.7l-26.52 13.26c7.234 16.7 11.26 35.11 11.26 54.44zM256 112c19.33 0 37.74 4.026 54.44 11.26l13.26-26.52C302.26 87.86 279.66 82 256 82s-46.26 5.86-67.7 14.74l13.26 26.52c16.7-7.234 35.11-11.26 54.44-11.26zm0 288c-19.33 0-37.74-4.026-54.44-11.26l-13.26 26.52C209.74 424.14 232.34 430 256 430s46.26-5.86 67.7-14.74l-13.26-26.52c-16.7 7.234-35.11 11.26-54.44 11.26z" />
    <text x="256" y="280" textAnchor="middle" fontSize="72" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif">IEEE</text>
  </svg>
);

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Leadership &amp; Community
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Leadership roles, community contributions, and professional involvement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {leadershipData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-lg"
            >
              <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:linear-gradient(135deg,hsl(var(--primary))_0%,hsl(var(--primary-glow))_50%,hsl(var(--primary))_100%)]" />

              <Card className="relative p-8 md:p-10 border-border/50 bg-card overflow-hidden">
                <div className="relative flex flex-col md:flex-row items-start gap-6">
                  <div className="shrink-0 relative">
                    <div className="p-5 rounded-full bg-primary/10 border border-primary/20 text-primary relative">
                      <IeeeLogo />
                      <div className="absolute inset-0 rounded-full border border-primary/30" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {item.organization}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm md:text-base">
                      {item.role}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.duration}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
