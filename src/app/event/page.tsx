'use client';

import { Spotlight } from "@/components/ui/spotlight";
import WormholeCanvas from '@/components/WormHoleCanvas';
import { useEffect, useState } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from "next/image";


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
    <div className='md:h-[150px] lg:h-[150px] sm:h-[100px] border bg-opacity-10 backdrop-blur-[1px] bg-black'>
      <Spotlight
        className='from-purple-500 via-purple-800 to-purple-500 blur-xl '
        size={64}
      />
      <div className='p-4'>
        <h1 className='md:text-5xl lg:text-5xl sm:text-2xl md:py-4 font-bold text-center text-purple-400 z-999'>
          &#123; Events and Workshops &#125;
        </h1>
        <h5 className="text-center sm:text-sm lg:text-lg md:text-lg">
          Below are the past events, upcoming events, and workshops conducted by the community.
        </h5>
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
};

const ZenotroneCard = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 mt-8">
      {/* Animated beams */}
      <div className="absolute top-1/2 left-0 w-64 h-[2px] bg-purple-500 opacity-75 -translate-y-1/2 beamLeft" />
      <div className="absolute top-1/2 right-0 w-64 h-[2px] bg-purple-500 opacity-75 -translate-y-1/2 beamRight" />

      {/* Main Card Container */}
      <div className={`relative w-full max-w-[1200px] mb-20 md:h-[550px] h-[600px]
                      bg-opacity-20 border border-silver-500 backdrop-blur-sm 
                      rounded-xl overflow-hidden bg-[#121221] text-white shadow-lg`}>

        {/* Top gradient shape */}
        <div className={`absolute top-0 left-0 w-full h-[180px] 
                        border borderCosmic Registration-silver-500 bg-gradient-to-r 
                        from-purple to-black clip-shape `} />

        {/* Top Brand & Icons */}
        <div className="absolute top-4 left-4 text-lg font-bold">
          <Image
            src={'/zenotrone.png'}
            width={200}
            height={40}
            alt="Zenotrone"
            className="lg:w-[200px] w-[100px]"
          />
        </div>

        <div className=" absolute flex mt-5 lg:ml-[1050px] ml-[350px]  sm:ml-[200px] md:ml-[1000px]">
          <Image
            src={'/logo.png'}
            width={100}
            height={20}
            alt="logo"
            className="sm:w-[50px] w-[40px] md:w-[100px] lg:w-[100px]"
          />
        </div>

        <div className="absolute z-50 lg:top-8 top-5 sm:top-5 sm:right-2 lg:right-8 right-2 lg:mt-10 sm:mt-0 flex gap-3 text-xl text-purple-500">
          <button
            onClick={() => openLink("https://instagram.com")}
            className="transition transform hover:scale-110 hover:text-purple-400 shadow-md shadow-purple-500/50 p-1 lg:p-2 rounded-lg cursor-pointer focus:outline-none"
          >
            <Instagram className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer" />
          </button>

          <button
            onClick={() => openLink("https://twitter.com")}
            className="transition transform hover:scale-110 hover:text-purple-400 shadow-md shadow-purple-500/50 p-1 lg:p-2 rounded-lg cursor-pointer focus:outline-none"
          >
            <Twitter className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer" />
          </button>

          <button
            onClick={() => openLink("https://linkedin.com")}
            className="transition transform hover:scale-110 hover:text-purple-400 shadow-md shadow-purple-500/50 p-1 lg:p-2 rounded-lg cursor-pointer focus:outline-none"
          >
            <Linkedin className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer" />
          </button>
        </div>

        {/* Card Content */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full md:h-full pt-12 px-4 md:px-6">
          {/* Event Photo Placeholder */}
          <div className="w-full border-rounded-xl mb-[40px] border-silver-500 mt-5 md:w-3/4 lg:h-[350px] sm:h-[250px] flex justify-center mb-4 md:mb-24">
            <Image
              src={"/profile.jpg"}
              width={200}
              height={100}
              alt="Event"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Event Details */}

        <div className="z-50 lg:ml-[900px] md:ml-[600px] sm:ml-[8px] sm:-mt-[20px] md:-mt-[350px] lg:-mt-[350px] flex flex-col justify-center items-center">
  
  {/* Event Title */}
  <h1 className="sm:text-sm lg:text-3xl font-bold text-center text-purple-500">
    ZenoTronE
  </h1>

  {/* Event Description */}
  <p className="text-center text-xs  lg:text-md max-w-[300px] lg:max-w-[500px]">
    This is an event conducted by the DevSomeware community to showcase the latest technologies and trends in the industry.
  </p>

  {/* Tags Section */}
  <div className="flex flex-wrap gap-3 mt-4">
    {/* Upcoming Event Tag */}
    <span className="px-3 py-1 text-xs lg:text-sm font-semibold text-white 
                    bg-gradient-to-r from-purple-500 to-purple-700
                    border border-purple-400 rounded-full shadow-md">
      🔥 Upcoming Event on 22nd Feb, 2025
    </span>

    {/* Registration Date Tag */}
    <span className="px-3 py-1 text-xs lg:text-sm font-semibold text-white 
                    border border-purple-500 rounded-full 
                    bg-black/20 shadow-md">
      🗓️ Registration: Feb 1st - 15th, 2025
    </span>
  </div>

  {/* Register Button */}
  <div className="flex flex-col z-50 items-center justify-center mt-6">
    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none shadow-lg">
      Register Now
    </button>
  </div>
  
</div>


        {/* Bottom decorative shape */}
        <div className="absolute -bottom-[70px] md:bottom-0 lg:bottom-0 h-[100px] left-0 w-full">
          <Image
            src={'/text1.png'}
            width={1200}  
            height={80}
            alt="Zenotrone"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const GenaiCard = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 mt-8">
      {/* Animated beams */}
      <div className="absolute top-1/2 left-0 w-64 h-[2px] bg-purple-500 opacity-75 -translate-y-1/2 beamLeft" />
      <div className="absolute top-1/2 right-0 w-64 h-[2px] bg-purple-500 opacity-75 -translate-y-1/2 beamRight" />

      {/* Main Card Container */}
      <div className={`relative w-full max-w-[1200px] mb-20 md:h-[550px] h-[600px]
                      bg-opacity-20 border border-silver-500 backdrop-blur-sm 
                      rounded-xl overflow-hidden bg-[#121221] text-white shadow-lg`}>

        {/* Top gradient shape */}
        <div className={`absolute top-0 left-0 w-full h-[180px] 
                        border borderCosmic Registration-silver-500 bg-gradient-to-r 
                        from-purple to-black clip-shape `} />

        {/* Top Brand & Icons */}
        <div className="absolute top-4 left-4 text-lg font-bold">
          <Image
            src={'/techtalk.png'}
            width={200}
            height={40}
            alt="Zenotrone"
            className="lg:w-[200px] w-[100px]"
          />
        </div>

        <div className=" absolute flex mt-5 lg:ml-[1050px] ml-[350px]  sm:ml-[200px] md:ml-[1000px]">
          <Image
            src={'/logo.png'}
            width={100}
            height={20}
            alt="logo"
            className="sm:w-[50px] w-[40px] md:w-[100px] lg:w-[100px]"
          />
        </div>

        <div className="absolute z-50 lg:top-8 top-5 sm:top-5 sm:right-2 lg:right-8 right-2 lg:mt-10 sm:mt-0 flex gap-3 text-xl text-purple-500">
          <button
            onClick={() => openLink("https://instagram.com")}
            className="transition transform hover:scale-110 hover:text-purple-400 shadow-md shadow-purple-500/50 p-1 lg:p-2 rounded-lg cursor-pointer focus:outline-none"
          >
            <Instagram className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer" />
          </button>

          <button
            onClick={() => openLink("https://twitter.com")}
            className="transition transform hover:scale-110 hover:text-purple-400 shadow-md shadow-purple-500/50 p-1 lg:p-2 rounded-lg cursor-pointer focus:outline-none"
          >
            <Twitter className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer" />
          </button>

          <button
            onClick={() => openLink("https://linkedin.com")}
            className="transition transform hover:scale-110 hover:text-purple-400 shadow-md shadow-purple-500/50 p-1 lg:p-2 rounded-lg cursor-pointer focus:outline-none"
          >
            <Linkedin className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer" />
          </button>
        </div>

        {/* Card Content */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full md:h-full pt-12 px-4 md:px-6">
          {/* Event Photo Placeholder */}
          <div className="w-full rounded-lg border mb-[40px] border-silver-500 mt-5 md:w-3/4 lg:h-[350px] sm:h-[250px] flex justify-center mb-4 md:mb-24">
            <Image
              src={"/thumbnail2.png"}
              width={1000}
              height={100}
              alt="Event"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Event Details */}

        <div className=" lg:ml-[900px] md:ml-[600px] sm:ml-[8px] sm:-mt-[20px] md:-mt-[350px] lg:-mt-[350px] flex flex-col justify-center items-center">
  
  {/* Event Title */}
  <h1 className="sm:text-sm lg:text-3xl font-bold text-center text-purple-500">
    Gen AI Workshop
  </h1>

  {/* Event Description */}
  <p className="text-center text-xs  lg:text-md max-w-[300px] lg:max-w-[500px]">
    Gen AI Workshop is a workshop conducted by the DevSomeware community to showcase new AI technologies and trends in the industry.
  </p>

  {/* Tags Section */}
  <div className="flex flex-wrap gap-3 mt-4">
    {/* Upcoming Event Tag */}
    <span className="px-3 py-1 text-xs lg:text-sm font-semibold text-white 
                    bg-gradient-to-r from-purple-500 to-purple-700
                    border border-purple-400 rounded-full shadow-md">
      ✅ Past Event on 23rd Jan, 2025
    </span>

    {/* Registration Date Tag */}
    <span className="px-3 py-1 text-xs lg:text-sm font-semibold text-white 
                    border border-purple-500 rounded-full 
                    bg-black/20 shadow-md">
      🗓️ Registration Ended
    </span>
  </div>

  {/* Register Button */}
  <div className="flex flex-col  items-center justify-center mt-6">
    <button className="bg-purple-300  hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none shadow-lg">
    🚫 Register Closed
    </button>
  </div>
  
</div>


        {/* Bottom decorative shape */}
        <div className="absolute -bottom-[70px] md:bottom-0 lg:bottom-0 h-[100px] left-0 w-full">
          <Image
            src={'/text1.png'}
            width={1200}  
            height={80}
            alt="Zenotrone"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const EventPage = () => {
  return (
    <main className="relative min-h-screen overflow-auto bg-gradient-to-b from-black via-purple-950/20 to-black">
      <WormholeCanvas intensity={0.3} />
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen overflow-hidden">
        <div className="relative w-full top-[30px]">
          <Card />
          <ZenotroneCard />
          <GenaiCard />
        </div>
      </div>
    </main>
  );
};

export default EventPage;
