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
import mypic from "../assets/mypic.jpg"
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">

      {/* 1. BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Meteors />
      </div>

      {/* 2. FOREGROUND CONTENT LAYER */}
      <main className="relative z-20 max-w-2xl mx-auto px-6 py-16 space-y-8">
        
        {/* Hero Section */}
        <div className="flex justify-between items-center gap-4 my-6">
          
          {/* Left Side: Bio */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">hi, i'm Sanjeev</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Full stack developer</p>
          </div>

          {/* Right Side: Avatar */}
          <div className="shrink-0">
            <img 
              src={mypic} 
              alt="Profile" 
              className="w-20 h-20 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm" 
            />
          </div>

        </div>

        {/* Centered Available Status Pill (in between Hero & About) */}
        <div className="flex justify-center w-full my-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available to work and collaborate</span>
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