import React from "react";
import '../css/about.css';

const About = () => {
    return (
        <section 
        id="about"
        className="
        section
        w-full
        h-fit
        bg-[var(--container-color)]
        flex
        2xl:flex-row
        flex-col
        items-center
        2xl:py-16
        py-8
    ">
            <div className="
            about_title
            2xl:absolute
            flex
            flex-row
            text-black
            text-2xl
            font-bold
            2xl:text-5xl
        ">
                About Me.
            </div>
            <div className="
            about_perfil_container
            2xl:w-[40%]
            w-[80%]
            my-16
            2xl:mx-16
            flex
            justify-center
            items-center
        ">
                <div className="
                about_perfil
                w-full
                2xl:w-[50%]
                2xl:h-full
                flex
                flex-row
                justify-center
                items-center
            ">
                    <img className="
                about_avatar
                relative
                2xl:w-[18rem]
                2xl:h-[27rem]
                w-[9rem]
                h-[12rem]
                object-cover
                2xl:border-8
                border-4
                border-black
                z-[2]
                " alt="Avatar" src="/avatar.jpg" />
                    <div className="
                    about_avatar_shadow
                    absolute
                    2xl:h-[36rem]
                    2xl:w-[13rem]
                    w-[8rem]
                    h-[16rem]
                    bg-[var(--body-color)]
                    2xl:border-b-8
                    border-b-4
                    border-[var(--first-color)]
                ">
                        <div className="
                about_randomlines
                2xl:w-36
                2xl:h-36
                w-20
                h-20
                z-1
            ">
                            <img className="
                    h-full
                    w-full
                    object-contain
                    invert
                " src="/random-lines.svg" alt="random lines" />
                        </div>
                        <div className="
                about_geometricbox
                inline-block
                2xl:h-6
                2xl:w-6
                h-4
                w-4
                z-1
            ">
                            <div className="
                    about_geometricbox_bg
                    h-[90%]
                    w-[90%]
                    bg-[var(--first-color)]
                "/>
                            <div className="
                    about_geometricbox_border
                    h-full
                    w-full
                    2xl:border-4
                    border-2
                    border-black
                "/>
                        </div>
                        <div className="
                            about_tag_box
                            2xl:w-[7.5rem]
                            2xl:h-16
                            h-10
                            w-[4.25rem]
                            bg-[var(--first-color)]
                        "/>
                    </div>
                </div>
            </div>
            <div className="
            about_info
            2xl:w-[40%]
            w-[80%]
            h-fit
            flex
            flex-col
            justify-center
            text-[var(--text-color)]
            2xl:text-start
            px-2
            2xl:pt-36
        ">
                <div className="
                about_info_description
                2xl:mb-8
                2xl:mx-16
                mx-8
                mb-4
                flex
                justify-center
                2xl:justify-start">
                    <p className="
                    2xl:text-2xl
                    text-sm
                    text-center
                    2xl:text-start
                ">Passionate about creating <b>Web Pages</b>. I always try to offer users <b>the best experience</b>.</p>
                </div>
                <div className="
                about_info_skills
                2xl:mx-16
                flex
                flex-row
                justify-center
                2xl:justify-start">
                    <p className="
                    2xl:text-lg
                    2xl:text-start
                    text-xs
                "><b>My Skills:</b> HTML, CSS, JavaScript, ReactJS, Git & Github</p>
                </div>
                <div
                className="
                    about_contact
                    flex
                    flex-row
                    2xl:my-16
                    mt-8
                    justify-center
                    2xl:mx-16
                    w-full
                    2xl:w-fit
                    2xl:justify-start
                ">
                    <a href="#contact" className="
                        about_contact_button
                        flex
                        flex-row
                        justify-center
                        items-center
                        text-white
                        2xl:w-40 2xl:h-12
                        2xl:text-lg
                        text-xs
                        bg-black
                        cursor-pointer
                        h-8
                        w-28
                    ">
                        <img className="
                            2xl:w-[20px]
                            2xl:h-[20px]
                            w-[16px]
                            h-[16px]
                            invert
                            mr-2
                        " src="/send-plane-line.svg" alt="Send"/>
                        Contact me
                    </a>
                    <a href= 'https://www.linkedin.com/in/pghuy18/' target="blank" className="
                        about_contact_linkedin
                        2xl:w-12
                        2xl:h-12
                        2xl:border-4
                        border-black
                        ml-4
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        border-2
                        w-8
                        h-8
                    ">
                        <img className="2xl:w-[24px] 2xl:h-[24px]
                        w-[18px] h-[18px]
                        " src="/linkedin-box-fill.svg" alt="Linkedin"/>
                    </a>
                </div>
            </div>
        </section>)
}

export default About;