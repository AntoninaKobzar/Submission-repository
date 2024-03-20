import StatisticLine from "./StatisticLine";

const Statistics=({good,bad,neutral})=>{
   
    const totalFeedback = good + neutral + bad;
    const averageScore = ((good - bad) / totalFeedback || 0).toFixed(1);
    const positivePercentage = ((good / totalFeedback) * 100 || 0).toFixed(1)+"%";
    
    return(
<div>
<table>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="totalFeedback" value={totalFeedback}/>
      <StatisticLine text="averageScore" value={averageScore}/>
      <StatisticLine text="positivePercentage" value={positivePercentage}/>
</table>
</div>
    )}


export default Statistics