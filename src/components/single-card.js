import React from "react";

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleCardClick = () => {
        if (!disabled) handleChoice(card)
    }

    return (
    <div
        className="
        flipcard_card
        relative
        flex
        justify-center
        items-center
        self-center
        justify-self-center
        aspect-[2/3]
        2xl:w-28
        w-16
        rounded-md
        cursor-pointer
    ">
            <img src={'/flipcard/cardback.png'} alt="back"
            onClick={handleCardClick}
            className={flipped ? "flipcard_card_back back_flipped" : "flipcard_card_back"}/>
            <img src={card.src} alt="front"
            className={flipped ? "flipcard_card_front front_flipped" : "flipcard_card_front"}/>
    </div>
    ) 
}

export default SingleCard;