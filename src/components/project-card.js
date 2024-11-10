import React from "react";
import '../css/projects.css'

import {Link} from 'react-router-dom'

const ProjectCard = (props) => {

    return (
    <div
    className="
    projects_grid_item
    flex
    2xl:flex-col
    items-center
    w-full
    h-full
    gap-4
    p-4
    ">
        <div className="
            projects_grid_item_img
            2xl:w-full
            w-[32rem]
            h-[12rem]
            2xl:mb-4
            m-0
            cursor-pointer
            bg-white
        ">
            <img
            loading="lazy"
            className="
                w-full
                h-full
                xl:object-cover
                object-contain
            " src= {props.thumbnailSrc} alt="Avatar"/>
        </div>
        <Link to={props.link} className="
            projects_grid_item_button
            w-10
            h-10
            p-3
            absolute
            bg-black
            cursor-pointer
            hidden
            2xl:flex
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
            h-full
            flex
            flex-col
            justify-between
        ">
            <div className="flex 2xl:flex-col flex-col-reverse">
            <div className="
                projects_grid_item_info_category
                text-[var(--text-color)]
                2xl:text-sm
                text-xs
                mb-2
                2xl:mb-0
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
            </div>
            <div className="
                projects_grid_item_info_description
                2xl:text-md
                text-sm
                grow-[1]
            ">
                {props.description}
            </div>
            <div className="projects_grid_item_moreabout
            flex gap-4">
            <div className="
                projects_grid_item_moreabout_item
                cursor-pointer
                mr-4
                xl:text-md
                text-sm
            ">
                <Link className="flex gap-2" to={props.src}>
                <i className="ri-github-line"> </i><p className="xl:text-md text-sm">Source</p>
                </Link>
            </div>
            <div className="projects_grid_item_moreabout_item cursor-pointer flex gap-2 items-center 2xl:hidden">
            <Link className="flex gap-2" to={props.link}>
                <i className="ri-links-fill"/><p className="xl:text-md text-sm">View</p>
                </Link>
            </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;