import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h1>Last Name: {props.lastName}</h1>
    <h1>Age: {props.age}</h1>
    </>

  )
}

function App() {
  const [counter, setCounter] = useState(0) //0 is the inital state
  const name = "Alvo"
  const isAppering = true
  return (
    <div className="App">
      <h1>Helo {name}</h1>
      {/* {name ? (
        <>
        test
        </>
      ): (
        <>
        test
        </>
      )} */}
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      <Person name="Dave" lastName = "Doe" age="30"/>
      {/* <Person name="John" lastName= "Version" age="24"/> */}

    </div>
  );
}

export default App;
