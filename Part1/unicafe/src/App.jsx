import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'


const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const handleGoodFeedback=()=>{
setGood(good+1)
}
const handleNeutralFeedback=()=>{
  setNeutral(neutral+1)
  }
  const handleBadFeedback=()=>{
    setBad(bad+1)
    }

 

  return (
    <div>
      <h2>give fidback</h2>
      <Button onClick={handleGoodFeedback} text="good"/>
      <Button onClick={handleNeutralFeedback} text="neutral"/>
      <Button onClick={handleBadFeedback} text="bad"/>
      <h2>statistics</h2>
      {(good!==0||bad!==0||neutral!==0)?
       <Statistics good={good} bad={bad} neutral={neutral}/>
      :<p>"No feedback given"</p>
      }
    </div>
  )
}

export default App