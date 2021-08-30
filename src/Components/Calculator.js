import React from 'react'
import { useState } from 'react';

export const Calculator = () => {
    const [inpval, setInpval] = useState("")
    const funinpval = (n) => {
        setInpval(inpval+n)
    }
    const changed = (event) =>{
            setInpval(event.target.value)
    }
    const evaluate = ()=>{
        var ans = (eval(inpval))
        setInpval(ans)
    }
    const sqrt = ()=>{
        var ans = (eval(inpval))
        setInpval(Math.sqrt(ans))
    }
    return (
        <div className="calculator container my-4">
            <div className="input-group mb-3" id="calc-inp">
                <input type="text" className="form-control" value={inpval} onChange={changed}/>
            </div>
            <div className="buttons">
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("7")}>7</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("8")}>8</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("9")}>9</button>
                <button className="btn btn-outline-warning num-btn num-btn-ac" onClick={()=>setInpval("")}>A.C.</button>
                <button className="btn btn-outline-danger num-btn num-btn-plus" onClick={()=>funinpval("+")}>+</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("4")}>4</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("5")}>5</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("6")}>6</button>
                <button className="btn btn-outline-danger num-btn" onClick={()=>funinpval("/")}>÷</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("3")}>3</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("2")}>2</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("1")}>1</button>
                <button className="btn btn-outline-danger num-btn" onClick={()=>funinpval("*")}>*</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("0")}>0</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval("00")}>00</button>
                <button className="btn btn-outline-primary num-btn" onClick={()=>funinpval(".")}>.</button>
                <button className="btn btn-outline-success num-btn" onClick={()=>evaluate()}>=</button>
                <button className="btn btn-outline-danger num-btn" onClick={()=>funinpval("-")}>-</button>
                <button className="btn btn-outline-danger num-btn" onClick={()=>sqrt()}>√</button>

            </div>
        </div>
    )
}
