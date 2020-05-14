import React from 'react';
import List from './List.js';
import './App.css';

function makeCardsArray(cardIds, allCards) {
  const cardsArray = [];
  for (let id of cardIds) {
    cardsArray.push(allCards[id]);
  }
  return cardsArray;
}

function makeSectionArray(lists, allCards) {
  const sectionArray = lists.map((list, i) => {
    return (
      <List 
        key={i}
        header={list.header}
        cards={makeCardsArray(list.cardIds, allCards)}
      />
    );
  });
  return sectionArray;
}

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {makeSectionArray(props.store.lists, props.store.allCards)}
      </div>
    </main>
  );
}

export default App;