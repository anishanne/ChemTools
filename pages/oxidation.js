// pages/index.js
import React, { useState } from "react";
import {useEffect} from "react"

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
   useEffect(() => {
    if ("https://www.chemistrytools.org" in window.location.href  ) return
    else{ const redirectTimer = setTimeout(() => {
      window.location.href = "https://www.chemistrytools.org/"; // Replace with the external URL
    }, 1000); // 3 seconds in milliseconds

    // Clear the timer when the component unmounts (optional)
    return () => clearTimeout(redirectTimer);}
    // Redirect to an external website after a delay (e.g., 3 seconds)
   
  }, []);
  const [products, setProducts] = useState([{ coeff: "", concentration: "" }]);
  const [reactants, setReactants] = useState([
    { coeff: "", concentration: "" },
  ]);
  const [result, setResult] = useState("");

  const handleAddProduct = () => {
    setProducts([...products, { coeff: "", concentration: "" }]);
  };

  const handleAddReactant = () => {
    setReactants([...reactants, { coeff: "", concentration: "" }]);
  };

  const handleCalculate = () => {
    // Check if any input is empty
    if (
      Object.values(products).some(
        (product) => product.coeff === "" || product.concentration === ""
      ) ||
      Object.values(reactants).some(
        (reactant) => reactant.coeff === "" || reactant.concentration === ""
      )
    ) {
      setResult(
        "Please enter coefficients and concentrations for all products and reactants."
      );
    } else {
      const KQ = calculateEquilibriumKQ(products, reactants);
      setResult(`K = ${KQ.K}, Q = ${KQ.Q}`);
    }
  };

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
      <h2 className="text-white">Equilibrium K vs Q Calculator</h2>
      <div>
        <h3 className="text-white">Products:</h3>
        {products.map((product, index) => (
          <div key={index}>
            <label className="text-white">Coefficient:</label>
            <input
              type="number"
              className="text-black"
              value={product.coeff}
              onChange={(e) => {
                const newProducts = [...products];
                newProducts[index].coeff = e.target.value;
                setProducts(newProducts);
              }}
            />
            <label className="text-white">Concentration:</label>
            <input
              type="number"
              className="text-black"
              value={product.concentration}
              onChange={(e) => {
                const newProducts = [...products];
                newProducts[index].concentration = e.target.value;
                setProducts(newProducts);
              }}
            />
          </div>
        ))}
        <button className="text-white" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
      <div>
        <h3 className="text-white">Reactants:</h3>
        {reactants.map((reactant, index) => (
          <div key={index}>
            <label className="text-white">Coefficient:</label>
            <input
              type="number"
              className="text-black"
              value={reactant.coeff}
              onChange={(e) => {
                const newReactants = [...reactants];
                newReactants[index].coeff = e.target.value;
                setReactants(newReactants);
              }}
            />
            <label className="text-white">Concentration:</label>
            <input
              type="number"
              className="text-black"
              value={reactant.concentration}
              onChange={(e) => {
                const newReactants = [...reactants];
                newReactants[index].concentration = e.target.value;
                setReactants(newReactants);
              }}
            />
          </div>
        ))}
        <button className="text-white" onClick={handleAddReactant}>
          Add Reactant
        </button>
      </div>
      <button className="text-white" onClick={handleCalculate}>
        Calculate
      </button>
      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}
