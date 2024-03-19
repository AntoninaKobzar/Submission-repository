

const Statistics=({good,bad,neutral})=>{
    console.log()
    const totalFeedback = good + neutral + bad;
    const averageScore = (good - bad) / totalFeedback || 0;
    const positivePercentage = (good / totalFeedback) * 100 || 0;
    return(
<div>
<h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all  {totalFeedback}</p>
      <p>average   {averageScore}</p>
      <p>positive {positivePercentage.toFixed(2)}%</p>
</div>
    )
}

export default Statistics