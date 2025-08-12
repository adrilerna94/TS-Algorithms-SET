/* eslint-disable */
/* prettier-ignore-start*/

export function arrayUnion(arr1 : number[], arr2 : number[]) {

  // a-b --> ASC order [1,2,3] || b-a --> DESC order [3,2,1].sort((a,b) => b-a);
  return [...new Set([...arr1, ...arr2])].sort((a,b) => a-b);

}

// ⚡MEJOR PERPORMANCE⚡
export function oldSchoolUnion(arr1 : number[], arr2 : number[]) {
  // transformamos a set 1o de los 2 arrays.
  const setArr1 = new Set(arr1);
  // iteramos sobre el otro array
  for (const valueArr2 of arr2) {
    // añadimos valores  arr2 que no están en arr1
    // al ser Set evitamos tener que comprobar si ya existen
    // de forma automática evitará duplicados excluyendo aquellos valores que ya existen
    setArr1.add(valueArr2);
  }
  return [...setArr1].sort((a,b) => a-b);

}

// CONCAT ➡️ const uniqueUnion = [...new Set(arr1.concat(arr2))];


/* prettier-ignore-end*/
