import React from "react";
import '../css/projects.css'

import {Link} from 'react-router-dom'

const ProjectCard = (props) => {

    return (
    <div
    className="
    projects_grid_item
    flex
    flex-col
    items-center
    w-full
    h-full
    p-4
    ">
        <div className="
            projects_grid_item_img
            w-full
            h-[12rem]
            mb-4
            cursor-pointer
        ">
            <img className="
                w-full
                h-full
                object-cover
            " src= {props.thumbnailSrc} alt="Avatar"/>
        </div>
        <Link to="/flipcard" className="
            projects_grid_item_button
            w-10
            h-10
            p-3
            absolute
            bg-black
            cursor-pointer
        ">
            <img className="
                w-full
                h-full
                invert
            " src="/arrow-right-up-line.svg" alt="None"/>
        </Link>
        <div className="
            projects_grid_item_info
            w-full
        ">
            <div className="
                projects_grid_item_info_category
                text-[var(--text-color)]
                2xl:text-sm
                text-xs
                flex
            ">
                {props.category}
            </div>
            <div className="
                projects_grid_item_info_title
                text-black
                font-bold
                2xl:text-xl
                text-lg
                my-2
                cursor-pointer
            ">
                {props.title}
            </div>
            <div className="
                projects_grid_item_info_description
                2xl:text-md
                text-sm
            ">
                {props.description}
            </div>
        </div>
        <div className="
            projects_grid_item_moreabout
            mt-4
            w-full
            flex
            2xl:text-sm
            text-xs
        ">
            <div className="
                projects_grid_item_moreabout_github
                cursor-pointer
                mr-4
            ">
                <i className="ri-github-line"> </i>Source
            </div>
            <div className="
                projects_grid_item_moreabout_demo
                cursor-pointer
            ">
                <i className="ri-play-line"> </i>Demo
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;