import React, { useState } from 'react';
import BeautifulScreen from './BeautifulScreen';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import ItSOverNineThousand from './ItSOverNineThousand';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleResetClick = () => {
    setInput("");
    setResult(null);
  };

  const handleOperatorClick = (operator) => {
    setInput(input + operator);
  };

  const handleEqualClick = () => {
    // Utilisation de la fonction eval() pour effectuer le calcul
    // Note: l'utilisation de eval() peut être dangereuse si les données ne sont pas contrôlées
    setResult(eval(input));
  };

  return (
    <div className="calculator">
      <BeautifulScreen calculation={input} result={result} />
      <button onClick={handleResetClick}>Reset</button>  {/* Nouveau bouton */}
      <ItSOverNineThousand result={result} />
      <NumberButton value="0" onClick={handleNumberClick} />
      <NumberButton value="1" onClick={handleNumberClick} />
      <NumberButton value="2" onClick={handleNumberClick} />
      <NumberButton value="3" onClick={handleNumberClick} />
      <NumberButton value="4" onClick={handleNumberClick} />
      <NumberButton value="5" onClick={handleNumberClick} />
      <NumberButton value="6" onClick={handleNumberClick} />
      <NumberButton value="7" onClick={handleNumberClick} />
      <NumberButton value="8" onClick={handleNumberClick} />
      <NumberButton value="9" onClick={handleNumberClick} />
      <OperatorButton operator="+" onClick={handleOperatorClick} />
      <OperatorButton operator="-" onClick={handleOperatorClick} />
      <OperatorButton operator="/" onClick={handleOperatorClick} />
      <OperatorButton operator="*" onClick={handleOperatorClick} />
      <EqualButton onClick={handleEqualClick} />
    </div>
  );
};

export default Calculator;
