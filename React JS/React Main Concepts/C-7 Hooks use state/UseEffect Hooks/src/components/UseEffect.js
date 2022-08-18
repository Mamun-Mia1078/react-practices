import React, { useState } from 'react'

const useEffectExample = () => {
    const [count, setCount] = useState(0);
    


return (
            <div>
                <h1>Press + button for Increase Value and - button for Discrease...</h1>
                <h1> Count: {count} </h1>
                <button onClick={() => {
                    setCount((count) => count+1)
                }} >+</button>
                 <button onClick={() => {
                    setCount((count) => count-1)
                }} >-</button>
            </div>
      
    )

}
export default useEffectExample;