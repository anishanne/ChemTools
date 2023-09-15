export const calculateElectronegativityDifference = (
  electronegativity1,
  electronegativity2
) => {
  console.log(electronegativity1, electronegativity2);

  if (electronegativity1 != null) {
    console.log("electronegativity1 is not null");
    if (electronegativity2 != null) {
      console.log("electronegativity2 is not null");
      return Math.abs(electronegativity1 - electronegativity2);
    }
    return null;
  }
  return null;
};

export const getBondType = (electronegativityDifference) => {
  console.log(electronegativityDifference);
  if (electronegativityDifference < 0.5 && electronegativityDifference > 0) {
    return "Non-polar covalent";
  } else if (
    electronegativityDifference >= 0.5 &&
    electronegativityDifference < 1.7
  ) {
    return "Polar covalent";
  } else if (electronegativityDifference >= 1.7) {
    return "Ionic";
  } else if (electronegativityDifference === null) {
    return "Invalid electronegativity difference";
  }
};
