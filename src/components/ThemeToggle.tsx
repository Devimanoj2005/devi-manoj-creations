import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative overflow-hidden bg-card/80 backdrop-blur-lg border border-border/50 shadow-soft"
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden hover:scale-110 transition-all duration-300 hover:bg-accent group bg-card/80 backdrop-blur-lg border border-border/50 shadow-soft hover:shadow-glow"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-primary group-hover:text-primary" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary group-hover:text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
