import { memo } from 'react';
import qu from "../assets/qu.jpg";

const Education = () => {
  return (
    <div className="space-y-6">
      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        
        <div className="relative flex items-center gap-4 my-2">
          <img src={qu} className="h-10 w-10 rounded-full object-cover" alt="Quantum University" />
          
          <div className="flex-1">
            <a href="https://quantumuniversity.edu.in/" target="_blank" rel="noreferrer">
              <p className="font-bold leading-tight">Quantum university, Roorkee</p>
              <p className="text-xs font-semibold text-gray-400">Bachelors of computer applications</p>
            </a>
          </div>
          
          <p className="text-sm font-semibold text-gray-400">2024-2027</p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-3xl font-bold mb-3">Skills</h3>
        
        {/* Flex container wrapping the skill pills */}
        {/* flex-wrap controls whether the child be in the line or breaks if the space goes out */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs opacity-90 hover:opacity-40">
            React
          </span>
          <span className="opacity-90 hover:opacity-40 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs">
            Javascript
          </span>
          <span className=" opacity-90 hover:opacity-40 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs">
            Node.js
          </span>
          <span className=" opacity-90 hover:opacity-40 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs">
            Express.js
          </span>
          <span className=" opacity-90 hover:opacity-40 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs">
            MongoDB
          </span>
          <span className="opacity-90 hover:opacity-40 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs">
            JAVA+DSA
          </span>
          <span className="opacity-90 hover:opacity-40 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full border border-gray-200 shadow-xs">
            React Flow
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Education);