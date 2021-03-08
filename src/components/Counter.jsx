import { useState } from 'react'; // Toda vez que uma função começar com Use é um hook


//imutabilidade - é uma variavel que não pode ter seu valor alterado, mas podemos dar um novo valor pra essa variavel

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}