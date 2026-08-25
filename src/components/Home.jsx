import react from "../assets/react.svg";
import { Meteors } from "./ui/meteors";
import About from "./About"
import GitHub from "./GitHub"
import LeetCodeHeatmap from "./Leetcodeheatmap"
import Education from "./Education"
import Projects from "./Projects"
import Blog from "./Blog"
import Footer from "./Footer"
import FloatingDock from "./FloatingDock"
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">

      {/* 1. BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <Meteors />
      </div>

      {/* 2. FOREGROUND CONTENT LAYER */}
      <main className="relative z-20 max-w-2xl mx-auto px-6 py-16 space-y-6">
        
        {/* Hero Section */}
        <div className="flex justify-between items-start gap-4 my-10">
          
          {/* Left Side: Bio & Status Pill */}
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">hi, i'm Sanjeev</h1>
              <p className="mt-2 text-zinc-400">Software Engineer</p>
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-medium text-emerald-400 my-8 mx-10">
              <span className="relative flex h-2 w-2 mx-">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available - Open to new freelance projects and collaborations</span>
            </div>
          </div>

          {/* Right Side: Avatar */}
          <div className="shrink-0">
            <img 
              src={react} 
              alt="Profile" 
              className="w-20 h-20 rounded-2xl object-cover border border-zinc-800" 
            />
          </div>

        </div>

        <About/>
        <LeetCodeHeatmap username="sanjivp123"/>
        <Education/>
        <Projects/>
        <Blog/>
        <Footer/>
        <FloatingDock/>

      </main>

    </div>
  );
}