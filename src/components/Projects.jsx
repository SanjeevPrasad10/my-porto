import React from 'react';
import reactImg from '../assets/react.svg'; // adjusted to match standard 
import { SiGithub } from 'react-icons/si';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Project Card 1 */}
      <div className="flex flex-col h-[420px] border-2 border-white/20 rounded-2xl overflow-hidden bg-zinc-950">
        
        {/* Top Half (50% Height): Image */}
        <div className="h-1/2 w-full overflow-hidden bg-zinc-900">
          <img 
            src={reactImg} 
            alt="Hostel management project" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Bottom Half (50% Height): Text Content */}
        <div className="h-1/2 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-lg text-white">Hostel management</span>
              <span className="text-xs text-zinc-400">2026</span>
            </div>
            <p className="font-normal text-sm text-zinc-300 line-clamp-3">
              Sub-Stash is a web-based subscription management platform that
              helps users track recurring expenses, monitor bank deductions,
              and avoid surprise charges with spending analytics,
              multi-currency support, and automated reminders.
            </p>
            <div className='flex flex-wrap my-4 gap-2'>
                <span className='h-4 opacity-90 hover:opacity-40 text-xs px-2 pb-4  bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs'>Express.js</span>
                <span className='h-4 text-xs opacity-90 hover:opacity-40 px-2 pb-4  bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs'>MongoDB</span>
                <span className='h-4 text-xs opacity-90 hover:opacity-40 px-2 pb-4  bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs'>Websockets</span>
            </div>
           <div className=' '>
                <div className='flex items-center gap-2 border border-light-green rounded-4xl border-4 mx-4 px-2 justify-center cursor-pointer opacity-100 hover:opacity-70'>
                    <SiGithub/>
                    <p className='text-center'>Source</p>
                </div>
            </div>
          </div>
          
        </div>

      </div>

      {/* Project Card 2 */}
      <div className="flex flex-col h-[420px] border-2 border-white/20 rounded-2xl overflow-hidden bg-zinc-950">
        
        {/* Top Half (50% Height): Image */}
        <div className="h-1/2 w-full overflow-hidden bg-zinc-900">
          <img 
            src={reactImg} 
            alt="Hostel management project" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Bottom Half (50% Height): Text Content */}
        <div className="h-1/2 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-lg text-white">Hostel management</span>
              <span className="text-xs text-zinc-400">2026</span>
            </div>
            <p className="font-normal text-sm text-zinc-300 line-clamp-3">
              Sub-Stash is a web-based subscription management platform that
              helps users track recurring expenses, monitor bank deductions,
              and avoid surprise charges with spending analytics,
              multi-currency support, and automated reminders.
            </p>
            <div className='flex flex-wrap my-4 gap-2'>
                <span className='h-4 text-xs opacity-90 hover:opacity-40  px-2 pb-4  bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs'>Express.js</span>
                <span className='h-4 text-xs opacity-90 hover:opacity-40 px-2 pb-4  bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs'>MongoDB</span>
                <span className='h-4 text-xs opacity-90 hover:opacity-40 px-2 pb-4  bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs'>Websockets</span>
            </div>
            <div className=' '>
                <div className='flex items-center gap-2 border border-light-green rounded-4xl border-4 mx-4 px-2 justify-center cursor-pointer opacity-100 hover:opacity-70'>
                    <SiGithub/>
                    <p className='text-center'>Source</p>
                </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Projects;