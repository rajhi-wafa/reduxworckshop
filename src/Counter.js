import React from "react";
import{connect}from "react-redux"
import{increment ,decrement, reset} from'./redux/actions/counterActions'
const Counter = ({counter,increment,decrement,reset}) => {
    return(
  <div>

<h1>COUNTER</h1>
<button className="increment-btn"onClick={()=>increment()} >+</button>
<span>{counter}</span>
<button className="decrement-btn"onClick={()=>decrement()}>-</button>
<br/>
<button className="reset-btn"onClick={()=>reset()}>Reset</button>

</div>)
}
const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    }
};
const mapDipatchToProps =(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement()),
        reset:()=>dispatch(reset())
    }
}


export default connect(mapStateToProps,mapDipatchToProps)(Counter);
 
          