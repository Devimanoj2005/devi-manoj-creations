import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const highlights = [
  { lead: "B.Tech", rest: "student in Computer Science & Engineering" },
  { lead: "3", rest: "internship experiences" },
  { lead: "2024–2028", rest: "at SJCET Palai" },
  { lead: "React + Next.js", rest: "web development" },
];

const DeviProfile = () => (
  <main className="min-h-screen bg-background text-foreground">
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
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

    <section className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-5 pb-14 sm:px-8 lg:px-12">
      <div className="w-full max-w-6xl py-10 sm:py-16">
        <p className="text-xs font-medium uppercase text-muted-foreground sm:text-sm">
          Devi Manoj <span className="mx-2 text-border">·</span> Full Stack Developer
        </p>
        <h1 className="mt-4 text-5xl font-normal leading-tight sm:text-6xl">I am Devi;</h1>

        <div className="mt-4 space-y-1 sm:mt-6" aria-label="Highlights">
          {highlights.map(({ lead, rest }) => (
            <p key={lead} className="text-2xl leading-tight sm:text-3xl md:text-4xl">
              <span className="text-primary">{lead}</span>{" "}
              <span className="text-foreground/90">{rest}</span>
            </p>
          ))}
        </div>

        <a
          href="https://github.com/Devimanoj2005"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Explore my work on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  </main>
);

export default DeviProfile;