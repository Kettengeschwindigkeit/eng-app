import { useState } from "react/cjs/react.development";


const Count = () => {
    const [count, setCount] = useState(0);



    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )

}

export default Count
