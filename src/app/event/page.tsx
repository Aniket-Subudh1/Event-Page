'use client';

import { Spotlight } from "@/components/ui/spotlight";
import WormholeCanvas from '@/components/WormHoleCanvas';
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{
    top: string;
    left: string;
    delay: string;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: particle.delay,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
};

const Card = () => {
  return (
    <div className='md:h-[150px] lg:h-[150px] sm:h-[100px] border  bg-opacity-10 backdrop-blur-[1px] bg-black'>
    <Spotlight
      className='from-purple-500 via-purple-800 to-purple-500 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900'
      size={64}
    />
    <div className='p-4'>
      <h1 className='md:text-5xl lg:text-5xl sm:text-2xl  md:py-4 font-bold text-center text-purple-400 z-999'> &#123; Events and Workshops &#125;</h1>
      <h5 className="text-center sm:text-sm lg:text-lg md:text-lg">Below are the past events, upcoming events and workshops conducted by the community.</h5>
   </div>

    <div className='absolute inset-0'>
      <svg className='h-full w-full'>
        <defs>
          <pattern
            id='grid-pattern'
            width='8'
            height='8'
            patternUnits='userSpaceOnUse'
          >
            <path
              xmlns='http://www.w3.org/2000/svg'
              d='M0 4H4M4 4V0M4 4H8M4 4V8'
              stroke='currentColor'
              strokeOpacity='0.3'
              className='stroke-black'
            />
            <rect
              x='3'
              y='3'
              width='2'
              height='2'
              fill='currentColor'
              fillOpacity='0.25'
              className='fill-black'
            />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid-pattern)' />
      </svg>
    </div>
  </div>
);
}



const EventPage = () => {

  return (
    <main className="relative min-h-screen overflow-auto bg-gradient-to-b from-black via-purple-950/20 to-black">
      <WormholeCanvas intensity={0.3} />
      <ParticleBackground />
      
      <div className="relative z-10 flex min-h-screen overflow-hidden">
        <div className="relative w-full top-[90px] ">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default EventPage;