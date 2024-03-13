function Display({ displayValue, onInputChange, onCalculate }) {
  
    const handleChange = (event) => {
        onInputChange(event.target.value);
    }

    return (
        
        <div class = 'flex justify-center mt-10'>
            <div class ='text-white w-2/3'>
                    <div class = 'flex items-center'>
                        <input class = 'text-white bg-zinc-800 hover:bg-zinc-900 rounded-l-lg w-full indent-3 py-4' 
                        type = 'text' 
                        placeholder = 'Enter Expression'
                        value = {displayValue}
                        onChange = {handleChange}
                        />
                        <button class = 'bg-green-800 hover:bg-green-900 rounded-r-lg px-4 py-4' onClick = {onCalculate}>
                            <strong>Calculate</strong>
                        </button>
                    </div>
            </div>
        </div>
        
    )
}

export default Display;
