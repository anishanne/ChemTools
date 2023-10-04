export function calculatepH(pOH) {
  return 14 - pOH;
}

// Function to calculate pOH from pH
export function calculatepOH(pH) {
  return 14 - pH;
}

// Function to calculate pKa from Ka
export function calculatepKa(Ka) {
  return -Math.log10(Ka);
}

// Function to calculate pKb from Kb
export function calculatepKb(Kb) {
  return -Math.log10(Kb);
}

// Function to calculate molarity using MaVa = MbVb formula
export function calculateMolarity(params) {
  const { Ma, Va, Mb, Vb } = params;
  let missingParam = "";

  if (!Ma && Va && Mb && Vb) {
    missingParam = "Ma";
    return { missingParam, value: (Mb * Vb) / Va };
  } else if (Ma && !Va && Mb && Vb) {
    missingParam = "Va";
    return { missingParam, value: (Mb * Vb) / Ma };
  } else if (Ma && Va && !Mb && Vb) {
    missingParam = "Mb";
    return { missingParam, value: (Ma * Va) / Vb };
  } else if (Ma && Va && Mb && !Vb) {
    missingParam = "Vb";
    return { missingParam, value: (Ma * Va) / Mb };
  } else {
    return {
      error:
        "Please provide any three of the four parameters (Ma, Va, Mb, Vb).",
    };
  }
}
// Function to calculate the number of significant figures in a number
export function countSigFigs(number) {
  // Convert the number to a string to count digits
  const numStr = number.toString();
  let count = 0;
  let leadingZeros = true;
  let decimal = false;

  for (let i = 0; i < numStr.length; i++) {
    const char = numStr[i];
    if (char === ".") {
      decimal = true;
      continue;
      
    } 
    if (char === "0" && !leadingZeros) {
      // Count trailing zeros
      if (decimal) {
        count++;
      }
    }  else if (char === "0" && leadingZeros) {
      // Ignore leading zeros
      continue;
    }  else {
      // Count non-zero digits
      count++;
      leadingZeros = false;
    }
  }

  return count;
}

export function calculateEquilibriumKQ(products, reactants) {
  // Convert products and reactants objects to arrays
  const productArray = Object.values(products);
  const reactantArray = Object.values(reactants);

  // Calculate K
  const K = productArray.reduce(
    (acc, product) => acc * Math.pow(product.concentration, product.coeff),
    1
  );

  // Calculate Q
  const Q = reactantArray.reduce(
    (acc, reactant) => acc * Math.pow(reactant.concentration, reactant.coeff),
    1 // Set the initial value for Q to K
  );

  return { K, Q };
}
