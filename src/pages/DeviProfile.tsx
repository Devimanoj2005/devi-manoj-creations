import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const highlights = [
  {
    label: "Education",
    value: "B.Tech, Computer Science",
    detail: "SJCET Palai · 2024–2028",
    icon: GraduationCap,
  },
  {
    label: "Experience",
    value: "Three internship roles",
    detail: "Kochi Digitals · Beyond Innovators · MuLearn",
    icon: BriefcaseBusiness,
  },
  {
    label: "Based at",
    value: "Palai, Kerala",
    detail: "Building for the web, learning every day",
    icon: MapPin,
  },
];

const DeviProfile = () => (
  <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.28)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.28)_1px,transparent_1px)] bg-[size:56px_56px]"
    />

    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <Link to="/" className="text-lg font-semibold text-foreground" aria-label="Devi — home">
        DM<span className="text-muted-foreground">.</span>
      </Link>
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to portfolio
        </Link>
      </Button>
    </header>

    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-6 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-sm font-medium text-muted-foreground">
            Devi Manoj <span className="mx-2 text-border">/</span> Full Stack Developer
          </p>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
            I’m Devi<span className="text-muted-foreground">;</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I’m a Computer Science student who enjoys turning thoughtful ideas into useful web
            applications. I learn by building, collaborating, and exploring the craft of full-stack
            development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="mailto:2005devimanoj@gmail.com">Get in touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/#projects">
                Explore my work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-2 shadow-lg">
            <img
              src={profilePhoto}
              alt="Portrait of Devi Manoj"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-md border border-border/70 bg-background/90 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-medium text-foreground">Curious by nature.</p>
              <p className="mt-1 text-xs text-muted-foreground">Focused on making the web useful.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="A few details about Devi" className="mt-14 border-t border-border pt-6 lg:mt-20">
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {highlights.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="min-w-0">
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{label}</span>
              </div>
              <p className="font-medium text-foreground">{value}</p>
              <p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default DeviProfile;