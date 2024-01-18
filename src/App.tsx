import React from 'react';
import './App.css';
import Card from './components/Card';
import useNames from './hooks/use-names';

function App() {
  const { names: nameCards, processName } = useNames();
  console.log('cards', nameCards)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Picker</h1>
        <p>
          right to choose, left to dismiss, bottom to decide later
        </p>
        <div className='Card-list'>
          {
            nameCards.map((nameCard) => 
              <Card
                onSelected={(id) => processName(id, true)}
                onRejected={(id) => processName(id, false)}
                key={nameCard.id}
                card={nameCard} />)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
