import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= sum; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [sum]);

  return (
    <>
      <input
        onChange={(e) => {
          setSum(e.target.value);
        }}
      ></input>
      <br></br>
      Sum from 1 to {sum} is {count}
      <br></br>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </>
  );
}

export default App;
