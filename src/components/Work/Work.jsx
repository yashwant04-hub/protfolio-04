import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
 {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    onClick={handleCloseModal}
  >
    <div
      className="relative bg-[#091325] rounded-3xl shadow-2xl w-[85%] max-w-3xl h-[80vh] flex flex-col overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={handleCloseModal}
        aria-label="Close modal"
        className="absolute top-4 right-4 z-50 flex items-center justify-center w-9 h-9 rounded-full text-white text-2xl bg-black/40 hover:bg-black/60 transition"
      >
        &times;
      </button>

      {/* IMAGE */}
      <div className="w-full flex justify-center items-center px-8 pt-10 pb-4 shrink-0">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full max-h-[32vh] object-contain rounded-2xl shadow-2xl"
        />
      </div>

      {/* TEXT + TAGS + BUTTONS */}
      <div className="px-8 pb-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {selectedProject.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#251f38] text-xs md:text-sm font-semibold text-purple-500 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#1f2937] hover:bg-purple-800 text-gray-200 py-3 rounded-2xl text-sm md:text-base font-semibold text-center transition"
          >
            View Code
          </a>
         
        </div>
      </div>
    </div>
  </div>
)}



    </section>
  );
};

export default Work;