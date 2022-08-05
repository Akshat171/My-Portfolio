import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/blog.png";
import cryptoImg from "../public/assets/projects/blog.png";
import netflixImg from "../public/assets/projects/blog.png";
import twitchImg from "../public/assets/projects/blog.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-20 py-16">
        <p className="text-xl text-center tracking-widest uppercase text-[#d7cb3c]">
          Projects
        </p>
        <h2 className="py-4 text-center">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ToDo List"
            backgroundImg={propertyImg}
            projectUrl="https://github.com/Akshat171/To-Do-List"
            tech="React JS"
          />
          <ProjectItem
            title="Codes Wear Website"
            backgroundImg={cryptoImg}
            projectUrl="https://github.com/Akshat171"
            tech="React JS"
          />
          <ProjectItem
            title="Blog website"
            backgroundImg={netflixImg}
            projectUrl="/blog"
            tech="React JS"
          />
          <ProjectItem
            title="LinkedIn clone"
            backgroundImg={twitchImg}
            projectUrl="/clone"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
