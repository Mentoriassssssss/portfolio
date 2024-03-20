import React, { useEffect, useState } from "react";

import '../css/flipcard.css'

import transition from "../components/transition";

const FlipCardPage = () => {

    const [words, setWords] = useState();
    const [word, setWord] = useState();
    const [meaning, setMeaning] = useState();

    useEffect(() => {
        let p = new Promise(async (resolve) => {
            let temp = await fetch('words.txt').then(res => res.text()).then(text => {
                let items = text.split('\n');
                items.forEach((item, index) => {
                    items[index] = item.split(': ')
                })
                return items
            })
            resolve(temp)
        })

        p.then(res => {
            setWords(res);
            let temp = res[Math.floor(Math.random() * res.length)];
            setWord(temp[0]);
            setMeaning(temp[1]);
        })

        console.log(1)
    },[])

    const handleFrontClick = () => {
        const front = document.getElementsByClassName('flipcard_card_front')[0];
        front.classList.add('flipcard_deactive');

        const back = document.getElementsByClassName('flipcard_card_back')[0];
        back.classList.add('flipcard_active');
    }

    const handleBackClick = () => {
        setTimeout(() => {
            let temp = words[Math.floor(Math.random() * words.length)];
            setWord(temp[0]);
            setMeaning(temp[1]);
        }, 500)

        const front = document.getElementsByClassName('flipcard_card_front')[0];
        front.classList.remove('flipcard_deactive');

        const back = document.getElementsByClassName('flipcard_card_back')[0];
        back.classList.remove('flipcard_active');
    }

    return (
        <div
            className="
            flex
            items-center
            justify-center
            h-screen
        ">
            <div 
                className="
                relative
                flipcard_card
                h-[50vh]
                w-[50vw]
                font-semibold
            ">
            <div
                onClick={handleFrontClick}
                className="
                flipcard_card_front
                bg-[var(--text-color-light)]
            ">
                
                <p 
                    className="
                    2xl:text-2xl
                    text-md
                    absolute
                    2xl:top-16
                    top-8
                ">Word</p>
                <p
                    id="flipcard_word"
                    className="
                    w-full
                    p-4
                    2xl:text-3xl
                    text-xl
                    flex
                    justify-center
                    items-center
                ">{word ? word : 'Words'}</p>
            </div>
            <div
                onClick={handleBackClick}
                className="
                flipcard_card_back
                absolute
                top-0
                bg-[var(--black-color-light)]
                text-white
            ">
                <p 
                    className="
                    2xl:text-2xl
                    text-md
                    absolute
                    2xl:top-16
                    top-8
                ">Meaning</p>
                <p
                    id='flipcard_meaning'
                    className="
                    2xl:text-3xl
                    text-xl
                    flex
                    justify-center
                    items-center
                    w-full
                    p-4
                ">{meaning ? meaning : "Meaning"}</p>
            </div>
            </div>
        </div>
    )
}

export default transition(FlipCardPage);