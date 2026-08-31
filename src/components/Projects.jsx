import React from "react";
import reactImg from "../assets/react.svg";
import chatX from "../assets/chatX.png"
import { SiGithub } from "react-icons/si";
import { Globe } from "lucide-react";
import hostel from "../assets/hostel.png"

const projects = [
  {
    title: "Hostel Management",
    year: "2026",
    image: hostel,
    description:
      "A web-based hostel management platform designed to simplify hostel operations, student management, and daily administrative tasks.",
    technologies: ["Express.js", "MongoDB", "WebSockets"],
    github: "https://github.com/SanjeevPrasad10",
    weblink:""
  },
  {
    title: "ChatX",
    year: "2026",
    image: chatX,
    description:
      "Built ChatX—a full-stack real-time chat application designed for high-concurrency messaging. Built with React for a dynamic UI, WebSockets for instant message delivery, and MongoDB to store chat history and user profiles securely.",
    technologies: ["React", "Websockets", "MongoDB"],
    github: "https://github.com/SanjeevPrasad10",
    weblink:""
  },
];

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              flex flex-col
              h-[420px]
              border border-zinc-200 dark:border-zinc-800
              rounded-2xl
              overflow-hidden
              bg-white dark:bg-zinc-950
              shadow-sm
              transition-colors duration-300
            "
          >

            {/* Image */}
            <div
              className="
                h-1/2 w-full
                overflow-hidden
                bg-zinc-100 dark:bg-zinc-900
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="h-1/2 p-4 flex flex-col justify-between">

              <div>

                {/* Title + Year */}
                <div className="flex justify-between items-center mb-2">

                  <span
                    className="
                      font-bold text-lg
                      text-zinc-900 dark:text-white
                    "
                  >
                    {project.title}
                  </span>

                  <span
                    className="
                      text-xs
                      text-zinc-500 dark:text-zinc-400
                    "
                  >
                    {project.year}
                  </span>

                </div>

                {/* Description */}
                <p
                  className="
                    font-normal text-sm
                    text-zinc-600 dark:text-zinc-300
                    line-clamp-3
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap my-4 gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3 py-1
                        text-xs font-semibold
                        rounded-full
                        bg-zinc-100 dark:bg-zinc-800
                        text-zinc-800 dark:text-zinc-200
                        border border-zinc-200 dark:border-zinc-700
                        transition-opacity
                        hover:opacity-60
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2
                    border
                    border-emerald-500
                    rounded-full
                    mx-4
                    px-3 py-2
                    justify-center
                    cursor-pointer
                    text-zinc-800 dark:text-zinc-200
                    hover:bg-emerald-500
                    hover:text-white
                    transition-all duration-200
                  "
                >
                  <SiGithub className="w-4 h-4" />
                  {/* <Globe className="w-4 h-4" /> */}

                  <span className="text-sm font-medium">
                    Source
                  </span>
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;