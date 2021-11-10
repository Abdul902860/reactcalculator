import React, { useState } from 'react';
import './App.css';
import { StandardCalc } from './component/StandardCalc'
import { WeigthCalc } from './component/WeigthCalc'
import { ScientificCalc } from './component/ScientificCalc'
import { CurrencyCalc } from './component/CurrencyCalc'
import { Menu } from './component/Menu'
function App() {

  const [showStandardCalc, setStandardCalc] = useState(true)
  const [showWiegthCalc, setWiegthCalc] = useState(false)
  const [showScientificCalc, setScientificCalc] = useState(false)
  const [showCurrencyCalc, setCurrencyCalc] = useState(false)


  const selectCalc = (calc) => {
    const selectedCalc = calc.target.name

    switch (selectedCalc) {
      case 'standard':
        setStandardCalc(true);
        setWiegthCalc(false);
        setScientificCalc(false);
        setCurrencyCalc(false);
        break;

      case 'weight':
        setStandardCalc(false);
        setWiegthCalc(true);
        setScientificCalc(false);
        setCurrencyCalc(false);
        break;

      case 'scientific':
        setStandardCalc(false);
        setWiegthCalc(false);
        setScientificCalc(true);
        setCurrencyCalc(false);
        break;

      case 'currency':
        setStandardCalc(false);
        setWiegthCalc(false);
        setScientificCalc(false);
        setCurrencyCalc(true);
        break;
    }


  }

  return (
    <div className="app">
      <section className="menu">
        < Menu onClick={selectCalc} />
      </section>
      <section>
        {
          showStandardCalc &&
          <StandardCalc />
        }
        {
          showWiegthCalc &&
          <WeigthCalc />
        }
        {
          showScientificCalc &&
          <ScientificCalc />
        }
        {
          showCurrencyCalc &&
          <CurrencyCalc />
        }
      </section>



    </div>
  );
}

export default App;
