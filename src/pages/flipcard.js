import React from "react";

import '../css/flipcard.css'

import transition from "../components/transition";

function FlipCardPage() {
    return (
        <section
            className="
            flex
            items-center
            justify-center
            h-screen
        ">
            Flip Card
        </section>
    )
}

export default transition(FlipCardPage);