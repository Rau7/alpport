"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { use } from "react";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooter from "@/components/ProjectFooter";

export default function ProjectDetail({ params }) {
  const unwrappedParams = use(params);
  const project = projects.find((p) => p.id === unwrappedParams.projectName);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHeader />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 py-20 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Project Info */}
          <div className="mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600 whitespace-pre-line">
              {project.fullDescription}
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>

          {/* Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
