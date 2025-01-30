"use client";
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Ticket } from 'lucide-react';
import Image from 'next/image';

export default function EventPage() {
  return (
    <main className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Enhanced gradient effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,#4c1d95,transparent_50%)] opacity-40" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_100%_0%,#6d28d9,transparent_50%)] opacity-30" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_100%,#7c3aed,transparent_50%)] opacity-20" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-white animate-gradient-x">
            Featured Event
          </h1>
          <p className="text-purple-300/80 text-lg max-w-2xl mx-auto">
            Join us for an extraordinary experience that will shape the future of technology
          </p>
        </div>
        
        {/* Enhanced Event Card */}
        <div className="bg-gradient-to-br from-gray-900/95 to-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-purple-500/10">
          {/* Event Image Section */}
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Tech Conference"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-purple-500/30 flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                <span className="text-white/90 text-sm">4.9/5 Rating</span>
              </div>
              <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-purple-500/30 flex items-center gap-2">
                <Ticket className="w-4 h-4 text-purple-400" />
                <span className="text-white/90 text-sm">86% Seats Filled</span>
              </div>
            </div>
          </div>
          
          {/* Event Content */}
          <div className="p-10">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-5 py-2 bg-purple-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/20 animate-pulse">
                FEATURED EVENT
              </span>
              <span className="px-5 py-2 border border-purple-400/30 text-purple-400 text-sm font-medium rounded-full">
                Limited Seats Available
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
              Future of Technology Summit 2024
              <span className="block text-lg font-normal text-purple-400 mt-2">
                The Premier Tech Conference of the Year
              </span>
            </h2>
            
            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              Join industry leaders and innovators for an immersive experience exploring the latest trends in AI, blockchain, and quantum computing. Network with experts and gain insights into the technologies shaping our future. Be part of the conversation that will define the next decade of technological advancement.
            </p>
            
            {/* Enhanced Event Details Grid */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="group p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">March 15-17, 2024</span>
                </div>
              </div>
              <div className="group p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="group p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">Tech Convention Center, San Francisco</span>
                </div>
              </div>
              <div className="group p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">500+ Attendees Expected</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-sm underline underline-offset-4">
                View Event Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}