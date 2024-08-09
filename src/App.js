import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage(0);
    setPercentage2(0);
  }

  return (
    <div className="tip-calculator">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage} onSelect={setPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  const handleInput = (e) => {
    onSetBill(Number(e.target.value));
  };
  return (
    <div className="input-group">
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        placeholder="Bill Value"
        onChange={handleInput}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="input-group">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output">
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div className="reset-button">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
