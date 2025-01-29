'use client';

import WormholeCanvas from '@/components/WormHoleCanvas';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Code, Users, Rocket, Calendar, MapPin } from 'lucide-react';

export default function EventPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-auto bg-gradient-to-b from-black via-purple-950/20 to-black">
      <WormholeCanvas intensity={0.3} />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="relative w-full max-w-4xl mx-auto p-4">
          <div className="bg-gradient-to-br from-purple-900/30 to-black/40 backdrop-blur-2xl rounded-xl border border-purple-500/20 shadow-[0_0_60px_rgba(139,92,246,0.1)]">
            <div className="relative w-full aspect-[21/9] overflow-hidden border-b border-purple-500/20">
              <Image
                src="/event-thumbnail.jpg"
                alt="Tech Universe 2024"
                fill
                className="object-cover saturate-150"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-4xl font-bold text-purple-100">
                  <Code className="inline-block mr-3 -mt-1" size={32} />
                  DevSomeware Summit 2024
                </h1>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-purple-100">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">When</h3>
                    <p className="text-sm text-purple-300">March 15-17, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Where</h3>
                    <p className="text-sm text-purple-300">Global Innovation Hub</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Attendees</h3>
                    <p className="text-sm text-purple-300">5,000+ Developers</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-t border-purple-500/20 pt-6">
                  <h2 className="text-2xl font-semibold text-purple-100 mb-4 flex items-center gap-3">
                    <Rocket className="text-purple-400" />
                    Event Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-purple-400 font-medium">Open Source Collaboration</h3>
                      <p className="text-purple-300 text-sm leading-relaxed">
                        Contribute to cutting-edge projects with developers worldwide.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-purple-400 font-medium">Technical Workshops</h3>
                      <p className="text-purple-300 text-sm leading-relaxed">
                        Hands-on sessions with industry experts and core maintainers.
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => router.push('/event/timeline')}
                  className="w-full md:w-auto px-8 py-3 bg-purple-600/80 hover:bg-purple-700 text-purple-100 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center"
                >
                  View Event Timeline
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}