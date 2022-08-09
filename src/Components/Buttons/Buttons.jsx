import React, { useState } from 'react';
import CounterButton from './CounterButton';
import LightButton from './LightButton';
import LottoButton from './LottoButton';

export default function Buttons() {
  const [light, setLight] = useState(false);
  const lightText = light === true ? 'on' : 'off';
  return (
    <div className='App'>
      <header className={lightText}>
        <h1>React Buttons</h1>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CounterButton />
        <LightButton light={light} setLight={setLight} lightText={lightText} />
        <LottoButton />
      </main>
    </div>
  );
}
