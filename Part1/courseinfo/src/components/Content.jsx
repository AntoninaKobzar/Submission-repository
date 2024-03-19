
import Part from "./Part"
const Content=(props)=>{

    return(
        <div>
      <Part part1={props.name} exercises={props.exercises}/>
      <Part part2={props.name} exercises={props.exercises}/>
      <Part part3={props.name} exercises={props.exercises}/>
        </div>
    )
}
export default Content