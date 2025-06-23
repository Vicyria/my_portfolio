import React from "react";
const projects = [
    {
        title: "Learn with Meraki",
        description: "A french language learning school",
        image: null,
        link: "withmeraki.netlify.app",
    }
]
function ProjectCard({title, description, image, link}) {
    return (
        <div className="projectCard">
            <div className="projectCard__inner">
                <div className="projectCard__front">
                    <a href = {link} target = "_blank" rel = "noopener noreferrer">
                    <img src = {image} alt = {title} className="projectCard__image" />
                        <div className="projectCard__info">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </a>
                </div>
                <div className="projectCard__back">
                    <h3>Nothing to see here!</h3>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;