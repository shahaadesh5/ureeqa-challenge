import { useRef, useState } from "react";
import axios from "axios";

import Number from "./components/Number";
import "./App.css";

function App() {
  const [primeMedian, setPrimeMedian] = useState({
    primeMedians: [],
    primeNumbers: [],
  });

  const limitRef = useRef(null);

  const getResult = (event) => {
    event.preventDefault();

    const n = limitRef.current.value;

    if (!n) {
      alert("Input a limit");
      return;
    }

    axios
      .post(`http://localhost:5000/prime`, { n })
      .then((res) => {
        if (res.data.success)
          setPrimeMedian({
            primeMedians: res.data.primeMedians,
            primeNumbers: res.data.primeNumbers,
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <form onSubmit={getResult}>
        <div>
          <input type="number" ref={limitRef} placeholder="Input Limit" />
        </div>

        <button type="submit">Show</button>
      </form>
      <div>Prime Numbers:</div>
      <div className="row">
        {primeMedian.primeNumbers.length ? (
          <>
            {primeMedian.primeNumbers.map((prime, index) => {
              return (
                <div className="col" key={index}>
                  <Number value={prime} />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
      <div>Prime Medians:</div>
      <div className="row">
        {primeMedian.primeMedians.length ? (
          <>
            {primeMedian.primeMedians.map((median, index) => {
              return (
                <div className="col" key={index}>
                  <Number value={median} />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
