import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ButtonComponent count = {count} setCount = {setCount}></ButtonComponent>
    </>
  )
}

function ButtonComponent(state){
  return <>
  <button onClick = {state.setCount(state.count+1)}>Counter {state.count}</button>
  </>
}

export default App
