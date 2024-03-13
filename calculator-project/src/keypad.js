import React from "react";

const Keypad = ({ onButtonClick, onRemoveMouseDown, onRemoveMouseUp }) => {

    const handleButtonClick = (value) => {
        onButtonClick(value);
    }

    return (
        <div>
            <div class = 'flex justify-center'>
                <div class = 'grid grid-cols-4 gap-2 w-2/3 mt-5 text-xl'>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg py-2' onClick={() => handleButtonClick('+')}>+</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('-')}>-</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('*')}>⋅</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('/')}>÷</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg py-2' onClick={() => handleButtonClick('pow( , n)')}>x<sup>n</sup></button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('sqrt( )')}><sup>n</sup>√</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('x')}>x</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick("derivative(' ', 'x')")}>x<sup>'</sup></button> 
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg py-2' onClick={() => handleButtonClick('sin(  )')}>sin</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('asin(  )')}>arcsin</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('cos(  )')}>cos</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('acos(  )')}>arccos</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg py-2' onClick={() => handleButtonClick('tan(  )')}>tan</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('atan(  )')}>arctan</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('%')}>%</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('log( , )')}>log<sub>b</sub></button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg py-2' onClick={() => handleButtonClick('(')}>(</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick(')')}>)</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('pi')}>π</button>
                    <button class = 'border-2 hover:bg-slate-100 border-slate rounded-lg' onClick={() => handleButtonClick('e')}>e</button>
                </div>
            </div>

            <div class = 'flex justify-center'>  
                <div class = 'grid grid-cols-3 gap-2 w-2/3 mt-2 text-xl'>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg py-2' onClick={() => handleButtonClick('9')}>9</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('8')}>8</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('7')}>7</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg py-2' onClick={() => handleButtonClick('6')}>6</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('5')}>5</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('4')}>4</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg py-2' onClick={() => handleButtonClick('3')}>3</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('2')}>2</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('1')}>1</button>
                    <button class = 'border-2 text-3xl border-slate hover:bg-slate-100 rounded-lg py-1' onClick={() => handleButtonClick('.')}>.</button>
                    <button class = 'border-2 border-slate hover:bg-slate-100 rounded-lg' onClick={() => handleButtonClick('0')}>0</button>
                    <button class = 'border-2 text-base border-slate hover:bg-slate-100 rounded-lg' 
                        onMouseDown= {onRemoveMouseDown}
                        onMouseUp = {onRemoveMouseUp}
                        onClick={() => handleButtonClick('Remove')}>Remove</button>
                </div>
            </div>

        </div>
    )
}

export default Keypad;
