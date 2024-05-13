import React, { useEffect} from "react";
import '../css/navbar.css'

import {Link} from 'react-scroll'

const Navbar = () => {

    const sections = document.getElementsByClassName('section');
    
    const sectionsProps = [];

    useEffect(() => {
        const scrollActive = () => {
            const scrollDown = window.scrollY;
            sectionsProps.forEach(current => {
                if (scrollDown > (current.top - 50) && scrollDown <= (current.top + current.height - 50)) {
                    let activeLink = document.getElementById('nav_' + current.id);
                    if (activeLink) activeLink.classList.add('active');
                }
                else {
                    let deactiveLink = document.getElementById('nav_' + current.id)
                    if (deactiveLink) deactiveLink.classList.remove('active');
                }
            })
        }
        window.addEventListener('scroll', scrollActive)
    
        Array.from(sections).forEach(current => {
        const temp = {
            id: current.getAttribute('id'),
            top: current.offsetTop,
            height: current.offsetHeight,
        }
        sectionsProps.push(temp);
    })
    })

    const handleNavOnClick = (id) => {
        if (document.getElementsByClassName("active")[0])
            document.getElementsByClassName("active")[0].classList.remove("active")
        document.getElementById(id).classList.add("active")
    }

    const handleMenuClick = () => {
        const menu = document.getElementsByClassName("nav")[0];
        const menuButton = document.getElementById("menu_button");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            menuButton.classList.remove("rotrev-2");
            menuButton.classList.add("rot");
            setTimeout (() => {
                menuButton.classList.add("ri-menu-4-line");
                menuButton.classList.remove("ri-close-line");
                menuButton.classList.remove("rot");
                menuButton.classList.add("rot-2");
            }, 500)
        } else {
            menu.classList.add("show");
            if (menuButton.classList.contains("rot-2"))
                menuButton.classList.remove("rot-2");
            menuButton.classList.add("rotrev")
            setTimeout (() => {
                menuButton.classList.remove("ri-menu-4-line");
                menuButton.classList.add("ri-close-line");
                menuButton.classList.remove("rotrev");
                menuButton.classList.add("rotrev-2");
            }, 500)
        }
    }

    return (<div className="
        navbar
        h-[4rem]
        w-full
        flex
        flex-row
        items-center
        justify-between
        2xl:px-32
        px-8
        fixed
        top-0
        left-0
        bg-[var(--container-color)]
        backdrop-blur-lg
        text-md
        font-medium
        z-50
        backdrop-blur-lg
    ">
        <div className="
            text-[var(--black-color)]
            w-[30%]
            flex
            2xl:justify-start
            text-lg
            font-semibold
        ">
            Mentorias
        </div>
        <div className="
            nav_container
            w-[70%]
            flex
            flex-row
            justify-end
            items-center
        ">
            <ul className="nav flex 2xl:flex-row flex-col justify-center items-center" >
                <div className="nav_item cursor-default flex-row nav_menu_title w-28 h-12 justify-center items-center font-bold text-xl">
                    <p>Menu</p>
                </div>
                <li onClick={() => handleNavOnClick("nav_intro")} className="nav_item flex justify-center items-center">
                    <Link className="nav_link w-28 h-12 justify-center items-center flex" smooth={true} offset={-30} duration={500} to="intro">
                        <p className="nav_link_text active" id="nav_intro">Home</p>
                    </Link>
                </li>
                <li onClick={() => handleNavOnClick("nav_about")} className="nav_item flex justify-center items-center">
                    <Link className="nav_link w-28 h-12 justify-center items-center flex" smooth={true} offset={-30} duration={500} to="about">
                        <p className="nav_link_text" id="nav_about">About Me</p>
                        </Link>
                </li>
                <li onClick={() => handleNavOnClick("nav_projects")} className="nav_item flex justify-center items-center">
                    <Link className="nav_link w-28 h-12 justify-center items-center flex" smooth={true} offset={-30} duration={500} to="projects">
                        <p className="nav_link_text" id="nav_projects">Projects</p>
                        </Link>
                </li> 
                <li onClick={() => handleNavOnClick("nav_contact")} className="nav_item flex items-center justify-center">
                    <Link className="nav_item_contact nav_link w-28 h-12 flex justify-center items-center hover:bg-[rgba(var(--first-color-rgb),1)]" smooth={true} offset={-30} duration={500} to="contact">
                        <p className="nav_link_text" id="nav_contact">Contact Me</p>
                    </Link>
                </li>
            </ul>
            <div onClick={handleMenuClick} className="nav_menu cursor-pointer ml-[1.5rem] 2xl:w-10 2xl:h-10 w-8 h-8 
            bg-black text-white flex 2xl:hidden justify-center items-center relative z-[100]
            ">
                <i id="menu_button" className="ri-menu-4-line 2xl:ri-3x ri-1x" />
            </div>
        </div>
    </div>)
}

export default Navbar;