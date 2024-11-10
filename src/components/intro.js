import React from "react";
import '../css/intro.css';
import { Link } from "react-router-dom";

const Intro = () => {

    return (
        <section id="intro"
        className="
        flex
        section
        w-full
        relative
        h-[90%]
        2xl:h-screen
        2xl:flex-row-reverse
        py-[4rem]
        flex-col
        justify-center
        2xl:justify-center
        items-center
        text-[var(--text-color)]
    ">
            <div className="
            intro_avatar
            pt-[2rem]
            pb-[.5rem]
            flex
            2xl:w-[40%]
            2xl:flex-row
            flex-col
            items-center
            justify-center
            2xl:py-0
            z-[2]
        ">
                <div className="
                2xl:w-[18rem]
                2xl:h-[27rem]
                w-[9rem]
                h-[12rem]
            ">
                    <img className="
                    h-full
                    w-full
                    relative
                    z-[2]
                    object-cover
                    "
                        src="/avatar3.webp" alt="Avatar" />
                    <div className="
                    relative
                    w-full
                    h-full
                    intro_avatar_shadow
                    border-4
                    border-black
                    bg-[var(--body-color)]
                    z-[1]
                "/>
                </div>
                <div className="
                    mt-[2vh]
                    relative
                    flex
                    flex-row
                    items-center
                    justify-center
                    2xl:flex-col
                    2xl:pl-12
                    2xl:m-0
                    mt-4
                ">
                    <div className="intro_contacts w-[1.5rem] h-[1.5rem] 2xl:w-[3rem] 2xl:h-[3rem] flex justify-center items-center m-4 text-white bg-[var(--black-color-light)]">
                        <Link to="https://github.com/Mentoriassssssss">
                            <img className="invert w-[1rem] h-[1rem] 2xl:w-[1.5rem] 2xl:h-[1.5rem]"
                            src="/github-line.svg" alt="Social icons"/>
                            </Link>
                    </div>
                    <div className="intro_contacts w-[1.5rem] h-[1.5rem] 2xl:w-[3rem] 2xl:h-[3rem] flex justify-center items-center m-4 text-white bg-[var(--black-color-light)]">
                        <Link to="https://www.linkedin.com/in/huy-ph%E1%BA%A1m-810108335/">
                            <img className="invert w-[1rem] h-[1rem] 2xl:w-[1.5rem] 2xl:h-[1.5rem]"
                            src="/linkedin-box-line.svg" alt="Social icons"/>
                            </Link>
                    </div>
                    <div className="intro_contacts w-[1.5rem] h-[1.5rem] 2xl:w-[3rem] 2xl:h-[3rem] flex justify-center items-center m-4 text-white bg-[var(--black-color-light)]">
                        <Link to="https://www.facebook.com/lullaby.for.ur.soul">
                        <img className="invert w-[1rem] h-[1rem] 2xl:w-[1.5rem] 2xl:h-[1.5rem]"
                        src="/facebook-fill.svg" alt="Social icons"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="
            intro_greeting
            2xl:w-[40%]
            w-[80%]
            flex
            flex-col
            items-center
            justify-center
            2xl:items-start
            2xl:pl-16
        ">
                <div className="
                    intro_name
                    2xl:text-5xl
                    text-2xl
                    font-bold
                    text-black
                    mb-[1rem]
                    2xl:mb-[2rem]
                ">Phạm Gia Huy</div>
                <div className="
                    w-full
                    intro_description_container
                    2xl:text-2xl
                    text-sm
                    m-0
                    p-0
                    flex-row
                    flex
                ">
                    <p className="text-center 2xl:text-start"><span className="intro_job_title"><b>Front-end developer</b>, w</span>ith passion and enthusiasm in website and application development, I keep on learning and improving over time. Graduand in Advanced Program of Computer Science (APCS).
                    </p>
                </div>
                <div className="
                intro_scrolldown_button
                relative
                w-full
                    2xl:mt-16
                    mt-8
                    flex
                    2xl:flex-row
                    flex-col
                    items-center
                ">
                    <div className="p-2 relative cursor-pointer flex flex-col justify-center items-center w-[30px] h-[30px] text-white bg-black"> <i className="intro_scrolldown ri-arrow-down-s-line 2xl:ri-xl ri-sm" /></div>
                    <span className="px-4 text-[var(--text-color)] text-sm invisible 2xl:visible">Scroll Down</span>
                </div>
            </div>
            <div className="
                intro_randomlines
                absolute
                w-28
                h-28
                z-[0]
            ">
                <img className="
                    h-full
                    w-full
                    object-contain
                " src="/random-lines.svg" alt="random lines" />
            </div>
            <div className="
                intro_curvedarrow
                absolute
                2xl:w-24
                2xl:h-24
                w-12
                h-12
            ">
                <img className="
                    h-full
                    w-full
                    object-contain
                " src="/curved-arrow.svg" alt="random lines" />
            </div>
            <div className="
                intro_geometricbox
                inline-block
                absolute
                2xl:h-6
                2xl:w-6
                h-4
                w-4
                z-30
            ">
                <div className="
                    intro_geometricbox_bg
                    h-[90%]
                    w-[90%]
                    bg-[var(--first-color)]
                "/>
                <div className="
                    intro_geometricbox_border
                    h-full
                    w-full
                    2xl:border-4
                    border-2
                    border-black
                "/>
            </div>
        </section>)
}

export default Intro;