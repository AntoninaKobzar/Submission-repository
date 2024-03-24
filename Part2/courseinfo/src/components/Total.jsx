const Total = ({ parts }) => {
    return (
      <div>
        <strong>Total of  {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong>
      </div>
    );
  };
  
  export default Total;

     