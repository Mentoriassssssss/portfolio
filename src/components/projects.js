import React, { useEffect, useState } from "react";
import '../css/projects.css'
import ProjectCard from "./project-card";

const Projects = () => {

    const [array, setArray] = useState(
        [
            {
                thumbnailSrc: "/avatar.jpg",
                title:"Flipcard",
                category:"Mini game",
                description:"Matching flip cards game",
                link: '/flipcard',
            },
            {
                thumbnailSrc: "/avatar.jpg",
                title:"Expense Tracker",
                category:"Website",
                description:"A simple expense tracker website",
                link: 'https://expensetracker-front.netlify.app/',
            }
        ]
    );
    
    return (
    <section
    id="projects"
    className="
        section
        flex
        flex-col
        items-center
        w-full
        h-fit
        2xl:px-52
        px-8
        bg-[var(--body-color)]
        text-[var(--text-color)]
        2xl:py-20
        py-8
        ">
        <div className="
            projects_title
            flex
            flex-row
            text-black
            text-2xl
            font-bold
            2xl:text-5xl
        ">
            Projects.
        </div>
        <div 
        className="
            projects_grid_container
            grid
            w-full
            h-full
            2xl:mt-20
            mt-8
            2xl:grid-cols-3
            grid-cols-1
            gap-8
        ">
           {array.map((item) => {
            return (
            <ProjectCard
                thumbnailSrc = {item.thumbnailSrc}
                title = {item.title}
                category = {item.category}
                description = {item.description}
                link = {item.link}
            />)
           })}
        </div>
    </section>)
}

export default Projects;