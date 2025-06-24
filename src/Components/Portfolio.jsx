import React from "react";
import "./Portfolio.css"

function Portfolio() {
    const freelance = [
        {
            title: "Learn With Meraki",
            description: "Created a website for an online French language learning schooling using React. I made the entire webiste solo, hand-drew illustrations and animations, did the copywriting, made animations using CSS and worked on its responsiveness ",
            technologies: "React, Javascript, Tailwind, Procreate",
            link: "https://withmeraki.netlify.app"
        },
        {
            title: "Heavenaqua",
            description: "Designed a website for a Water manufacturing company using WIX, made animations, copywrote the various banners and pages of the website and worked on the hosting and purchase of the domain using WIX",
            technologies: "WIX website builder, CSS and copywriting",
            link: "https://heavenaqua.com"
        }
    ]
    const projects =[
        {
            title: "Momento Mori Calender",
            description: "A calender to track the weeks left in your life",
            technologies: "HTML, Vanilla CSS, p5.js, Javascript"
        },
        {
            title: "Speech Emotion Recognition",
            description: "A Machine learning Project to detect the emotion of the speaker",
            technologies: "Machine learning, streamlit, python, numpy, Multi Layered Perceptron"
        },
        {
            title: "Youtube Sentiment Analysis",
            description: "A NLP project to analyze the sentiments of a YouTube video specifically its comments section",
            technologies: "Machine learning, NLP, streamlit, python, youtube-api"
        }, 
        {
            title: "Music Genre Classification",
            description: "A Machine learning project to classify a music file into distinct Genres",
            technologies: "Machine Learning, Tensorflow, Jupyter Notebook, python"
        }
    ]  
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Freelance Work</h2>
            <div className="portfolio-container">
                {freelance.map((item, index) => (
                    <div className="portfolio-box" key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <h3 className="heading">{item.title}</h3>
                            <p className="description">{item.description}</p>
                            <p className="technologies"><strong>Technologies used: {item.technologies}</strong></p>
                            <p className="check">Check it out!</p>
                        </a>
                        
                    </div>
                ))}
            </div>
            <h2 className="portfolio__title">My Projects</h2>
                <div className="portfolio-container">
                    {projects.map((item, index) => (
                    <div className="portfolio-box">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.technologies}</p>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default Portfolio;