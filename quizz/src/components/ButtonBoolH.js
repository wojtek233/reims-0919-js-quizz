import React from "react"
import './ButtonQcm.css'


function ButtonBool(props)  {    
  return (
  <div className='cardContent'>
    <div>
      <button 
        onClick={event => 
          {(props.correct_answer === 'True')? alert("Good answer") : alert("Wrong answer")} 
          }
          className='qcmButton'>Right
      </button>

        
      <button
        onClick={event => 
          {(props.incorrect_answer[0] === 'True')? alert("Good answer") : alert("Wrong answer")} 
          } 
          className='qcmButton'>Wrong
      </button>

    </div>
  </div>
  )
}export default ButtonBool;