import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";

const experiences = [
  {
    role: "Software Developer Intern",
    organization: "Beyond Innovators",
    period: "3 months",
    points: [
      "Contributed to full-stack development using modern frameworks; built and maintained scalable web application features.",
      "Collaborated with cross-functional teams on product requirements, code reviews, and iterative delivery cycles.",
    ],
  },
  {
    role: "Frontend Intern",
    organization: "MuLearn",
    period: "6 months",
    points: [
      "Developed and improved UI components using React.js; built responsive, accessible web applications with cross-functional teams.",
      "Contributed to frontend architecture decisions, performance optimisation, code reviews, and agile sprint cycles.",
    ],
  },
  {
    role: "Technical Officer",
    organization: "Innovation and Entrepreneurship Development Cell (IEDC), SJCET Palai",
    period: "2026 – Present",
    points: [
      "Led technical initiatives and workshops; collaborated on tech-based prototypes and proof-of-concept solutions.",
      "Mentored junior members on technology tools and guided them through project development phases.",
    ],
  },
  {
    role: "Design Lead",
    organization: "Computer Science and Engineering Association (CSEA), SJCET Palai",
    period: "2025 – Present",
    points: [
      "Designed posters, banners, and digital content for events using Figma and Canva; maintained consistent visual branding across all platforms.",
    ],
  },
  {
    role: "Web Team Member",
    organization: "IEEE Student Branch, SJCET Palai",
    period: "2025 – Present",
    points: [
      "Worked on website development, UI improvements, and published event updates and technical articles for the student branch portal.",
    ],
  },
];

const Experience = () => {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: "blur(10px)",
      x: prefersReduced ? 0 : i % 2 === 0 ? -30 : 30,
    }),
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        mass: 0.6,
      },
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.15 },
    },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Floating gradient background */}
      {!prefersReduced && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Roles and responsibilities that shaped my journey
          </p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/40 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={cardVariants}
                transition={{ delay: index * 0.12 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-6`}
              >
                {/* Timeline dot with glowing pulse */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6 md:mt-0 z-10"
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full bg-primary border-4 border-background" />
                    {!prefersReduced && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{
                          scale: [1, 2.2, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: index * 0.3,
                        }}
                      />
                    )}
                  </div>
                </motion.div>

                <div className="hidden md:block md:w-1/2" />

                <motion.div
                  className="ml-10 md:ml-0 md:w-1/2"
                  whileHover={
                    prefersReduced
                      ? undefined
                      : { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }
                  }
                >
                  <div className="group relative rounded-lg">
                    {/* Animated gradient border */}
                    <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:conic-gradient(from_var(--angle,0deg),hsl(var(--primary))_0%,transparent_25%,hsl(var(--primary-glow))_50%,transparent_75%,hsl(var(--primary))_100%)] animate-[spin_6s_linear_infinite]" />

                    <Card className="relative p-6 border-border/50 bg-card overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                      {/* Light reflection sweep */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

                      <div className="relative flex items-start gap-4">
                        <motion.div
                          className="p-3 bg-primary/10 rounded-xl"
                          whileHover={
                            prefersReduced
                              ? undefined
                              : { rotate: 12, scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }
                          }
                          transition={{ type: "spring", stiffness: 260, damping: 15 }}
                        >
                          <Briefcase className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-primary font-semibold text-sm mt-1">
                            {item.organization}
                          </p>
                          <p className="text-muted-foreground text-sm mt-2">
                            {item.period}
                          </p>
                          {item.points && (
                            <ul className="mt-3 space-y-2 list-disc list-outside pl-5">
                              {item.points.map((point, i) => (
                                <li
                                  key={i}
                                  className="text-muted-foreground text-sm leading-relaxed"
                                >
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
