import { useState } from "react";



export function Testworks() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if(count >= 10) return;
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if(count <= 0) return;
        setCount(count - 1);
    }

    return(
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={handleAdd}>Incrementar</button>
            <button onClick={handleSubtract}>Decrementar</button>
        </div>
    )
}