import React,{useState} from "react"


const D=()=>{
  const [score,setScore]=useState(0)
    return(
        <div>
            <h1> hi mawalu</h1>
            <h2>the current score is {score}</h2>
            <button  onClick={()=>score<25 ? setScore(score+1):""} style={{marginRight:"25px",color:"red",backgroundColor:"black"}}>
                increment
            </button>
            <button onClick={()=>score>0?setScore(score-1):""} style={{marginRight:"25px"}}>
                decrement
            </button>
            <button onClick={()=>setScore(0)} style={{marginRight:"25px"}}>
                reset
            </button>
     
        </div>

    )
}
export default D