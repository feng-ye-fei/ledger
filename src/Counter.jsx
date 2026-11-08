import {useState} from 'react'

function Counter({label}){
    const [count,setCount]=useState(10)
    return(
        <button type='button' onClick={()=>setCount(count+1)}>
            {label}:{count}
        </button>
    )
}

export default Counter