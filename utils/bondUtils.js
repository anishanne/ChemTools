export const calculateElectronegativityDifference = (
  electronegativity1,
  electronegativity2
) => {
  return Math.abs(electronegativity1 - electronegativity2);
};

export const getBondType = (electronegativityDifference) => {
  if (electronegativityDifference < 0.5) {
    return "Non-polar covalent";
  } else if (
    electronegativityDifference >= 0.5 &&
    electronegativityDifference < 1.7
  ) {
    return "Polar covalent";
  } else {
    return "Ionic";
  }
};
