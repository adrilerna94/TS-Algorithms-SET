const isArrayBSubsetOfA = (arrA: number[], arrB: number[]) => {
  // check if arrB is subset of arrA
  // distinct elements (not repeated)
  const arrASet = new Set(arrA);

  for (const value of arrB) {
    if (!arrASet.has(value)) {
      return false;
    }
  }

  return true;
};

export {isArrayBSubsetOfA};
