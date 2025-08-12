export function disjoint(arr1: number[], arr2: number[]) {
  // transformamos los 2 arrays en Sets asi reducimos el numero de iteraciones
  const arr1Set = new Set(arr1);
  // no es necesario el 2o set. con uno basta y es más performante en la mayoría de casos
  // puedes usar el array más pequeño para el set
  const arr2Set = new Set(arr2);
  let isDisjoint = true; // tampoco es necesario.

  for (const value of arr2Set) {
    if (arr1Set.has(value)) {
      isDisjoint = false;

      return isDisjoint;
    }
  }

  return isDisjoint;
}

/*

El objetivo es comprobar si un array

*/