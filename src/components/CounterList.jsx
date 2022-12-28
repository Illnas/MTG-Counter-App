import React from 'react'
import { v4 as uuidv4 } from "uuid";

const CounterList = ({counterList}) => {

    const count = {};
    for (const element of counterList) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  return (
    <div>
        <h1>Counter List</h1>
        {counterList.filter(function(item, pos) {
    return counterList.indexOf(item) == pos;
}).map(e => (
            <div key={uuidv4()}>
                {e} {count[e]}
            </div>
        ))}
    </div>
  )
}

export default CounterList