import { useState } from "react"


export default function counter(){
    const [count, setCount] = useState<number | null>(0)

    function onclickHandler(c){
        setCount(c => c+1);
    }

    return(
        <>
        <p>cups oredred: {count}</p>

        <button
          onClick={onclickHandler}
        >order one more items</button>
        </>
    )
}