'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Rocket, Ticket, MessageCircle, Code, Zap } from "lucide-react";


const terminalLines = [
  "> npm init ZenoTronE",
  "> npm install AmazingTechEvent --save",
  "> npm run dev",
  "> INITIALIZING COSMIC JOURNEY...",
  "[ REGISTRATION → QUANTUM_QUIZ → GALACTIC_DISCUSSIONS → STELLAR_HACK ]",
];

type TimelineEvent = {
  title: string;
  phase: string;
  date: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  icon: React.ReactNode;
  highlights: string[];
  images: string[];
};

export default function TimelineDemo() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    if (terminalIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalIndex((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowTimeline(true), 500); 
    }
  }, [terminalIndex]);

  const events: TimelineEvent[] = [
    {
      title: "Cosmic Registration",
      phase: "Stellar Entry Phase",
      date: "Sept 1-15, 2024",
      status: "upcoming",
      icon: <Ticket className="w-5 h-5 text-purple-400" />,
      highlights: [
        "Early Bird Discount (20% OFF)",
        "Team Registration Benefits",
        "Exclusive Swag Kit Access"
      ],
      images: ["/images/timeline/registration-1.jpg"]
    },
    {
      title: "Galactic Tech Quiz",
      phase: "Knowledge Nebula Challenge",
      date: "Sept 20, 2024",
      status: "upcoming",
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
      highlights: [
        "5 Technology Domains",
        "Live Leaderboard Tracking",
        "Practice Arena Access"
      ],
      images: ["/images/timeline/quiz-1.jpg"]
    },
    {
      title: "Orbital Discussions",
      phase: "Collaborative Learning Sphere",
      date: "Sept 25-27, 2024",
      status: "upcoming",
      icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
      highlights: [
        "Expert-Led Sessions",
        "Networking Lounges",
        "Interactive Workshops"
      ],
      images: ["/images/timeline/discussion-1.jpg"]
    },
    {
      title: "Nova Hackathon",
      phase: "48hr Innovation Supernova",
      date: "Oct 5-7, 2024",
      status: "upcoming",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      highlights: [
        "$50k+ Prize Pool",
        "Mentor Support System",
        "Post-Event Incubation"
      ],
      images: ["/images/timeline/hackathon-1.jpg"]
    }
  ];
  
  
  return (
    
    <div className="w-full bg-purple -mt-16  min-h-screen  flex flex-col ">
      
      {/* Terminal Effect */}
      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-lg md:text-4xl mb-4 mt-28 text-transparent  mt-28 bg-clip-text bg-[linear-gradient(45deg,#8b5cf6,#ec4899)] font-bold max-w-4xl cyber-font 
              text-center mx-auto px-4"
>
  DEV_SOMEWARE::ZENOTRONE_2025
</motion.h2>

<motion.div
  className="mb-8 text-left px-6 py-3 rounded-lg text-purple-300 font-mono 
             bg-black/50 border border-purple-500 shadow-lg w-full max-w-xl 
             mx-auto px-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {terminalLines.slice(0, terminalIndex + 1).map((line, index) => (
    <motion.p
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.5 }}
      className="text-sm md:text-base"
    >
      {line}
    </motion.p>
  ))}
</motion.div>

      {/* Glowing Beam Animation before Timeline Reveal */}
      {showTimeline && (
        <motion.div
          className="w-full   h-1 bg-purple-500/40 rounded-full overflow-hidden relative mb-0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-20 bg-purple-500 blur-md rounded-full"
            animate={{ x: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Timeline Cards */}
      {showTimeline && (
        <Timeline
          data={events.map(event => ({
            title: event.title,
            content: (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative group"
              >
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-purple-500/10 backdrop-blur-sm">
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-100">
                      {event.title}
                    </h3>
                    <p className="text-sm text-purple-300/80">{event.phase}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-medium text-purple-400">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="space-y-6">
                  <p className="text-purple-200/80 text-sm leading-relaxed">
                    {event.highlights[0]}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {event.images.map((img, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="relative h-32 md:h-44 rounded-xl overflow-hidden shadow-[0_0_24px_rgba(147,_51,_234,_0.15)]"
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          }))}
        />
      )}
    </div>
  );
}
