import React, { useState } from 'react';
import './App.css';
import useForm from './hooks/useForm';

function App() {
  const [count, setCount] = useState(0);
  const [formValues, setFormValues] = useForm({ fullName: 'test', age: 0 })
  return (
    <div>
      <h1>Let's USE react hooks again</h1>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button>-</button>
      <h1>{count}</h1>
      <form>
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <input
            value={formValues.fullName}
            onChange={setFormValues}
            name="fullName"
            type="text"
            placeholder="Full name ..."
          />
          <input
            onChange={setFormValues}
            value={formValues.age}
            name="age"
            type="number"
            placeholder="Age"
          />
        </div>
      </form>
    </div>
  )
}

export default App;
