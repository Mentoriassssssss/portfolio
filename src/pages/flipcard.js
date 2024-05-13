import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../css/flipcard.css'

import transition from "../components/transition";
import SingleCard from "../components/single-card";

const cardsImage = [
    { 'src': '/flipcard/helmet.png', matched: false },
    { 'src': '/flipcard/potion.png', matched: false},
    { 'src': '/flipcard/ring.png', matched: false },
    { 'src': '/flipcard/scroll.png', matched: false},
    { 'src': '/flipcard/shield.png', matched: false },
    { 'src': '/flipcard/sword.png', matched: false },
]

const FlipCardPage = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const navigate = useNavigate();

    const shuffleCards = () => {
        setIsGameStarted(true);
        const shuffledCards = [...cardsImage, ...cardsImage]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card) => {
        if (cardOne === null) {
            setCardOne(card);
        } else {
            if (cardOne.id !== card.id) {
                setCardTwo(card);
            }
        }
    }

    useEffect (() => {
        console.log("card one: ", cardOne,"card two: ", cardTwo)
        if (cardOne && cardTwo) {
            setDisabled(true);
            if (cardOne.src === cardTwo.src) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === cardOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    },[cardOne, cardTwo])

    const resetTurn = () => {
        setCardOne(null);
        setCardTwo(null);
        setTurns(turns => turns + 1);
        setDisabled(false);
    }

    return (
        <div
            className="
            h-screen
            w-screen
            bg-[var(--container-color)]
            flex
            justify-center
            items-center
            flex-col
        ">
            <div
                className="
                flipcard_cardgrid
            ">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === cardOne || card === cardTwo || card.matched}
                        disabled={disabled}
                    />))}
            </div>
            
            <div 
                className="
                flipcard_start
                w-48
                h-12
                flex
                justify-center
                items-center
                bg-black
                text-white
                2xl:text-lg
                text-md
                2xl:mt-8
                mt-4
                cursor-pointer
                "
                onClick={shuffleCards}>
                {!isGameStarted ? "New game" : "Reset"}
            </div>
            <div className="
            flex
            justify-center
            items-center
            2xl:h-12 h-8
            2xl:w-12 w-8
            absolute
            top-0
            left-0
            2xl:m-8 m-4
            cursor-pointer"
            onClick={() => navigate(-1)}>
                <img src="/back.png" 
                className="
                2xl:h-6 h-4
                2xl:w-6 w-4"/>
            </div>
        </div>
    )
}

export default transition(FlipCardPage);