'use client';
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Rocket, Ticket, MessageCircle, Code, Zap } from "lucide-react";

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
      images: [
        "/images/timeline/registration-1.jpg",
        "/images/timeline/registration-2.jpg"
      ]
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
      images: [
        "/images/timeline/quiz-1.jpg",
        "/images/timeline/quiz-2.jpg"
      ]
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
      images: [
        "/images/timeline/discussion-1.jpg",
        "/images/timeline/discussion-2.jpg"
      ]
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
      images: [
        "/images/timeline/hackathon-1.jpg",
        "/images/timeline/hackathon-2.jpg"
      ]
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-purple-900 via-purple-950 to-black">
      <Timeline data={events.map(event => ({
        title: event.title,
        content: (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

            {/* Progress Indicator */}
            <div className="relative h-1 mb-6 bg-purple-900/50 rounded-full overflow-hidden">
              <motion.div
                className="absolute h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 1 }}
              />
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

              <div className="space-y-3">
                {event.highlights.slice(1).map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-purple-300/80 text-sm"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-20 group-hover:opacity-30 transition-opacity" />
          </motion.div>
        )
      }))} />
    </div>
  );
}