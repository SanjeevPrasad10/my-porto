import { memo } from "react";
import qu from "../assets/qu.jpg";

const Education = () => {
  return (
    <div className="space-y-6">

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Education
        </h2>

        <div className="relative flex items-center gap-4 my-2">

          <img
            src={qu}
            className="h-10 w-10 rounded-full object-cover"
            alt="Quantum University"
          />

          <div className="flex-1">
            <a
              href="https://quantumuniversity.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="font-bold leading-tight">
                Quantum University, Roorkee
              </p>

              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Bachelors of Computer Applications
              </p>
            </a>
          </div>

          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            2024-2027
          </p>
        </div>
      </div>


      {/* Skills Section */}
      <div>
        <h3 className="text-3xl font-bold mb-3">
          Skills
        </h3>

        <div className="flex flex-wrap gap-2">

          <span className="skill-pill">
            React
          </span>

          <span className="skill-pill">
            Javascript
          </span>

          <span className="skill-pill">
            Node.js
          </span>

          <span className="skill-pill">
            Express.js
          </span>

          <span className="skill-pill">
            MongoDB
          </span>

          <span className="skill-pill">
            JAVA + DSA
          </span>

          <span className="skill-pill">
            React Flow
          </span>

        </div>
      </div>

    </div>
  );
};

export default memo(Education);