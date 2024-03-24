import Content from "./Content"
import Header  from "./Header"

const Course=(props)=>{

    return(
        <>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
        </>
    )
}
export default Course