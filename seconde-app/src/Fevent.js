import React from 'react'

export default function Fevent() {
    function clickHandler(){
        alert("function")
    }
    return (
        <div>
                <button onClick={clickHandler}>Function Event</button>
            
        </div>
    )
}
