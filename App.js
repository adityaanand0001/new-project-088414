import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STAGE DEFINITIONS (Restricted to 2, 4, 5, 6) ---
const STAGES = {
  PROMPT: 'PROMPT',       // 2. User types request (Kinetic Type)
  BLUEPRINT: 'BLUEPRINT', // 4. Wireframe drawing
  PAINT: 'PAINT',         // 5. Color injection
  FINAL: 'FINAL'          // 6. Marketing Reveal
};

// --- COMPONENT: The Dashboard UI ---
// (Exactly as it appeared in "TheArchitect" code)
const DashboardUI = ({ isPainted }) => {
  const borderClass = isPainted ? "border-neutral-700 bg-[#0f0f0f]" : "border-dashed border-neutral-600 bg-transparent";
  const textClass = isPainted ? "text-white" : "text-transparent bg-neutral-800 rounded animate-pulse";
  const barClass = isPainted ? "bg-blue-600" : "bg-neutral-800 border border-dashed border-neutral-600";

  return (
    <div className={`w-full h-full p-4 flex flex-col transition-all duration-1000 ${isPainted ? 'opacity-100' : 'opacity-90'}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className={`h-8 w-32 rounded transition-all duration-1000 ${isPainted ? 'bg-transparent' : 'bg-neutral-800'}`}>
           <h1 className={`text-xl font-bold transition-colors duration-500 ${isPainted ? 'text-white' : 'text-transparent'}`}>Analytics</h1>
        </div>
        <div className={`h-8 w-8 rounded-full transition-all duration-1000 ${isPainted ? 'bg-blue-500' : 'bg-neutral-800 border border-neutral-600'}`} />
      </div>

      <div className="flex gap-4 h-full">
        {/* Sidebar */}
        <div className={`w-16 hidden md:flex flex-col gap-4 py-2 border-r transition-all duration-1000 ${isPainted ? 'border-neutral-800' : 'border-neutral-700 border-dashed'}`}>
           {[1,2,3,4].map(i => (
             <div key={i} className={`w-8 h-8 rounded mx-auto transition-all duration-700 delay-${i*100} ${isPainted ? 'bg-neutral-800' : 'bg-neutral-900 border border-neutral-700'}`} />
           ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`h-24 rounded-lg p-4 flex flex-col justify-between border transition-all duration-1000 ${borderClass}`}
              >
                 <div className={`w-12 h-3 rounded ${isPainted ? 'bg-neutral-800' : 'bg-neutral-800'}`} />
                 <div className={`w-20 h-6 rounded ${textClass}`}>$24,000</div>
              </motion.div>
            ))}
          </div>
          
          {/* Big Chart Area */}
          <div className={`flex-1 rounded-lg border relative overflow-hidden transition-all duration-1000 ${borderClass}`}>
            {/* The "Chart" Lines */}
            <div className="absolute inset-0 flex items-end justify-around px-4 pb-0">
               {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: "0%" }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                   className={`w-8 rounded-t transition-all duration-1000 ${barClass}`}
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN CONTROLLER ---

export default function TheArchitectLoop() {
  const [stage, setStage] = useState(STAGES.PROMPT);

  // Transition Logic (Looping 2 -> 4 -> 5 -> 6 -> 2)
  useEffect(() => {
    const timers = {
      [STAGES.PROMPT]: 3500,    // Read text
      [STAGES.BLUEPRINT]: 3000, // Draw wireframe
      [STAGES.PAINT]: 2000,     // Fill colors
      [STAGES.FINAL]: 5000,     // Show result, then restart
    };

    const timer = setTimeout(() => {
      setStage((prev) => {
        if (prev === STAGES.PROMPT) return STAGES.BLUEPRINT;
        if (prev === STAGES.BLUEPRINT) return STAGES.PAINT;
        if (prev === STAGES.PAINT) return STAGES.FINAL;
        if (prev === STAGES.FINAL) return STAGES.PROMPT;
        return STAGES.PROMPT;
      });
    }, timers[stage]);

    return () => clearTimeout(timer);
  }, [stage]);

  const PROMPT_TEXT = "Build a modern financial dashboard with dark mode.";

  return (
    <div className="w-full h-full bg-black text-white font-sans overflow-hidden relative flex items-center justify-center p-4">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,20,20,1)_0%,_rgba(0,0,0,1)_100%)]" />
      </div>

      {/* 2. State Machine Render */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center min-h-[500px]">
        <AnimatePresence mode="wait">

          {/* STAGE 2: PROMPT (Kinetic Typography) */}
          {stage === STAGES.PROMPT && (
            <motion.div 
              key="prompt"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-neutral-500 text-sm uppercase tracking-widest mb-2">User Request</div>
              <div className="text-3xl md:text-5xl font-light text-center max-w-3xl leading-tight">
                "
                {PROMPT_TEXT.split(" ").map((word, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, filter: 'blur(4px)' }} 
                    animate={{ opacity: 1, filter: 'blur(0px)' }} 
                    transition={{ delay: i * 0.2, duration: 0.4 }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
                "
              </div>
              <motion.div 
                initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 2.5 }}
                className="h-0.5 bg-blue-500 mt-8 w-full max-w-md" 
              />
            </motion.div>
          )}

          {/* STAGE 4 & 5: BLUEPRINT & PAINT (Shared Container) */}
          {(stage === STAGES.BLUEPRINT || stage === STAGES.PAINT) && (
            <motion.div 
              key="building"
              initial={{ opacity: 0, rotateX: 20, scale: 0.8 }} 
              animate={{ opacity: 1, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-4xl h-[500px] perspective-1000"
            >
              <div className="absolute top-0 left-0 w-full text-center -mt-10 mb-4">
                 <span className="text-xs font-mono text-neutral-500 tracking-widest">
                    {stage === STAGES.BLUEPRINT ? 'STRUCTURING WIREFRAME...' : 'INJECTING STYLES...'}
                 </span>
              </div>
              <div className="w-full h-full bg-[#050505] rounded-xl border border-neutral-800 shadow-2xl overflow-hidden relative">
                 {/* Scanline Effect (Only in Paint) */}
                 {stage === STAGES.PAINT && (
                    <motion.div 
                      initial={{ top: "-10%" }} animate={{ top: "110%" }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute w-full h-2 bg-blue-500/20 blur-md z-20 pointer-events-none"
                    />
                 )}
                 <DashboardUI isPainted={stage === STAGES.PAINT} />
              </div>
            </motion.div>
          )}

          {/* STAGE 6: FINAL (Split Layout) */}
          {stage === STAGES.FINAL && (
            <motion.div 
              key="final"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} // Fade out to restart loop
              transition={{ duration: 1 }}
              className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl"
            >
              {/* The Product (Left) */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="w-full md:w-3/5"
              >
                <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)]">
                   <div className="h-[400px] pointer-events-none">
                      <DashboardUI isPainted={true} />
                   </div>
                </div>
              </motion.div>

              {/* The Copy (Right) */}
              <motion.div 
                className="w-full md:w-2/5 flex flex-col items-start text-left space-y-6"
                initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              >
                <div className="h-1 w-12 bg-blue-600 mb-2" />
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="text-neutral-500">Thought to</span><br/>
                  <span className="text-white">Reality.</span>
                </h1>
                <p className="text-lg text-neutral-400">
                  You just watched VibeyAI generate a production-ready dashboard interface from scratch. 
                  <br/><br/>
                  Stop coding boilerplate. Start architecting.
                </p>
                {/* Loop Indicator instead of Replay Button */}
                <div className="flex gap-2 items-center mt-4 text-xs font-mono text-neutral-600">
                  <span className="animate-spin w-3 h-3 border-2 border-neutral-600 border-t-transparent rounded-full"></span>
                  RESETTING SEQUENCE...
                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Persistent Progress Indicator */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-2">
         {Object.values(STAGES).map((s, i) => (
           <div 
             key={s} 
             className={`h-1 rounded-full transition-all duration-500 ${Object.values(STAGES).indexOf(stage) >= i ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-800'}`} 
           />
         ))}
      </div>

    </div>
  );
}
