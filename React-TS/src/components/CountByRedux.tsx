import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./redux";
import { StateType } from "./redux";

function CountByRedux() {
    const [val, setVal] = useState<number>(0);

    const dispatch = useDispatch();
    const count = useSelector((state: StateType) => state.count);
    
    const incrementHandler = () =>{
        setVal(0);
        dispatch(increment());
    };
    const decrementHandler = () =>{
        dispatch(decrement());
    };
    
    const incrementByValueHandler =() =>{

        dispatch(incrementByValue(val));

    };

  return (
    <div>
        <h1>Redux-Toolkit</h1>
        <h2>Count: {count}</h2>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <input type="number" value={val} onChange={(e) => setVal(Number(e.target.value))}/>
        <button disabled={val < 0 } onClick={incrementByValueHandler}>Add</button>

    </div>
  )
}

export default CountByRedux;