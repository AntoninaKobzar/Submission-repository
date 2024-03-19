const Total = ({ parts }) => {
    return (
      <div>
        <p>Total number of exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
      </div>
    );
  };
  
  export default Total;

     