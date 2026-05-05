import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import AnimatedCursor from "@/components/AnimatedCursor";
import IntroAnimation from "@/components/IntroAnimation";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return location.pathname === "/" && !sessionStorage.getItem("introShown");
  });
  const [revealContent, setRevealContent] = useState(!showIntro);

  useEffect(() => {
    if (!showIntro) setRevealContent(true);
  }, [showIntro]);

  const handleIntroDone = () => {
    sessionStorage.setItem("introShown", "1");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroDone} />}
      <div className={revealContent ? "intro-content-reveal" : "opacity-0"}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatedCursor />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
