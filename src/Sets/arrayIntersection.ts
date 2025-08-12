// buena performance
const arrayIntersection = (arr1: number[], arr2: number[]) => {
  const arr2Set = new Set(arr2);

  // eslint-disable-next-line prettier/prettier
  return [...new Set(arr1)]
  .filter((value) => arr2Set.has(value))
  .sort((a, b) => b - a);
};

export {arrayIntersection};

const arrayIntersectionOldSchool = (arr1: number[], arr2: number[]) => {
  // Creamos set de uno de los 2 arrays
  const setArr1 = new Set(arr1);
  // creamos set vacio que añadiremos el set intersection
  // solo los numeros que coincidan en ambos arrays
  // porque generamos set vacio?
  // asi nos evitamos comprobar si el valor ya existe en el nuevo array
  const resultSet = new Set<number>();

  for (const valueArr2 of arr2) {
    if (setArr1.has(valueArr2)) {
      resultSet.add(valueArr2);
    }
  }

  return [...resultSet].sort((a, b) => b - a);
};

/*
  🚫Creas new Set en cada iteración del filter ☣️Muy ineficiente
  return [...new Set([...arr1].filter((value) => new Set(arr2).has(value)))].sort((a, b) => b - a);
  */

// ⚡ Versión Paso a paso ⚡

/*
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  const arr1Unique = [...arr1Set];
  const intersectionArr = arr1Unique.filter((value) => arr2Set.has(value));
  const sortedDescIntersArr = intersectionArr.sort((a, b) => b - a);

  return sortedDescIntersArr;
*/
