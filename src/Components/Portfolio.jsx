import React from "react";
import projects from './Projects'
import Header from "./Header";
import "./Portfolio.css"
import ProjectCard from "./ProjectCard";

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">My Projects</h2>
            <div className="bentoGrid">
                {projects.map((project) => (
                    <ProjectCard
                    key = {project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;