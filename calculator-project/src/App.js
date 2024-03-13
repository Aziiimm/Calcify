import { useState, useRef } from 'react';
import Navbar from './navbar';
import Display from './display';
import Keypad from './keypad';
import Graph from './graph';
import { evaluate } from 'mathjs';

const App = () => {

  const [currentPage, setCurrentPage] = useState('calculator');
  const [displayValue, setDisplayValue] = useState('')
  const removeTimerRef = useRef(null);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  
  const handleRemoveChar = () => {
    setDisplayValue(displayValue.slice(0,-1));
  }

  const handleRemoveHold = () => {
    setDisplayValue('');
  }

  const handleRemoveMouseDown = () => {
    removeTimerRef.current = setTimeout(handleRemoveHold, 500);
  }

  const handleRemoveMouseUp = () => {
    clearTimeout(removeTimerRef.current)
  }

  const handleButtonClick = (value) => {
    if (value === 'Remove') {
      handleRemoveChar();
    }
    else {
      setDisplayValue(displayValue + value);
    }
  }

  const handleInputChange = (value) => {
    setDisplayValue(value);
  }

  const handleCalculate = () => {
   
    try {
      const result = evaluate(displayValue);
      setDisplayValue(result.toString());
    }
    catch (error) {
      console.error('Error in Calculation', error);
      setDisplayValue('Error');
    }
  }

  return (
    <div className="App">

    <Navbar onPageChange = {handlePageChange} />
      {currentPage === 'calculator' && (
        <>
          <Display displayValue = {displayValue} onInputChange = {handleInputChange} onCalculate = {handleCalculate}/>
          <Keypad 
            onButtonClick = {handleButtonClick}
            onRemoveMouseDown = {handleRemoveMouseDown}
            onRemoveMouseUp = {handleRemoveMouseUp}
          />
        </>
      )}
      {currentPage === 'graphing' && <Graph />}

    </div>
  );
}

export default App;
