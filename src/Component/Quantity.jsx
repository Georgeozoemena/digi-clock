import React, {useState} from 'react'

let Counter= ()=>{
    const [count, setState] = useState(0)

    let increase= ()=>{
        setState(count + 1)
    }
    let decrease= ()=>{
        setState(count - 1)
    }
    
    return(
        <div className="container">
            <p>{count}</p>
            <div className="btn">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default Counter