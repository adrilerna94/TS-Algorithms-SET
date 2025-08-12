const arrayDistinct = (arr: number[]) => {
  return [...new Set(arr)];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const arrayDistinctOld = (arr: number[]) => {
  const newSet = new Set(arr);
  const arrResult = Array.from(newSet);

  return arrResult;
};

export {arrayDistinct};
