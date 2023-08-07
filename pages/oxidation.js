// pages/index.js
import React, { useState } from "react";
import {
  calculateMolarity,
  countSigFigs,
  calculateEquilibriumKQ,
  calculatepH,
  calculatepKb,
  calculatepKa,
  calculatepOH,
} from "../utils/calculator";

export default function Calculations() {
  const [molarityInputs, setMolarityInputs] = useState({
    Ma: "",
    Va: "",
    Mb: "",
    Vb: "",
  });

  const [molarityResult, setMolarityResult] = useState("");

  const handleMolarityInputChange = (e) => {
    const { name, value } = e.target;
    setMolarityInputs({ ...molarityInputs, [name]: parseFloat(value) });
  };
  const handleMolarityCalculate = () => {
    const result = calculateMolarity(molarityInputs);
    if (result.error) {
      console.error(result.error);
    } else {
      const { missingParam, value } = result;
      setMolarityResult(
        `The missing parameter is ${missingParam} and its value is ${value}.`
      );
    }
  };

  const [sigFigsInput, setSigFigsInput] = useState("");
  const [sigFigsResult, setSigFigsResult] = useState("");

  const handleSigFigsInputChange = (e) => {
    const { value } = e.target;
    setSigFigsInput(value);
  };

  const handleSigFigsCalculate = () => {
    const result = countSigFigs(sigFigsInput);
    setSigFigsResult(
      `The number ${sigFigsInput} has ${result} significant figures.`
    );
  };

  return (
    <div className="text-black">
      {/* Molarity Calculator */}
      <h2 className="text-white">Molarity Calculator</h2>
      <input
        className="m-4"
        type="number"
        name="Ma"
        value={molarityInputs.Ma}
        onChange={handleMolarityInputChange}
      />
      <input
        type="number"
        className="m-4"
        name="Va"
        value={molarityInputs.Va}
        onChange={handleMolarityInputChange}
      />
      <input
        type="number"
        className="m-4"
        name="Mb"
        value={molarityInputs.Mb}
        onChange={handleMolarityInputChange}
      />
      <input
        type="number"
        className="m-4"
        name="Vb"
        value={molarityInputs.Vb}
        onChange={handleMolarityInputChange}
      />
      <button className="text-white" onClick={handleMolarityCalculate}>
        Calculate Molarity
      </button>
      <p className="text-white">{molarityResult}</p>

      {/* Sig Figs Calculator */}
      <h2 className="text-white">Sig Figs Calculator</h2>
      <input
        type="number"
        value={sigFigsInput}
        onChange={handleSigFigsInputChange}
      />
      <button className="text-white" onClick={handleSigFigsCalculate}>
        Calculate Sig Figs
      </button>
      <p className="text-white">{sigFigsResult}</p>
    </div>
  );
}
