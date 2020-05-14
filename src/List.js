import React from 'react';
import Card from './Card.js';
import './List.css';

function makeCardsArray(cards) {
    const cardsArray = cards.map((card, i) => {
        return <Card key={i} title={card.title} content={card.content} />;
    });
    return cardsArray
}

function List(props) {
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {makeCardsArray(props.cards)}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
            </div>
        </section>
    );
}

export default List;