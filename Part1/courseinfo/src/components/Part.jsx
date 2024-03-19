

const Part=(props)=>{

console.log(props.exercises)
    return(
        <div>
      <p>
        {props.name} {props.exercises}
      </p>
        </div>
    )
}
export default Part