const duplicateKdistance = (arr: number[], k: number) => {
  // creamos un Set vacio.
  // nos servirá para comprobar duplicados en array
  const window = new Set();

  // refactor para devolver un objeto más completo con
  /*
    ➡️ count: número de duplicados
    ➡️ isDuplicate: si hay duplicados
    ➡️ duplicateNumbers: array con los duplicados
  */ 
  const response: {
    count: number;
    isDuplicate: boolean;
    duplicateNumbers: Set<number>;
  } = {
    count: 0,
    isDuplicate: false,
    duplicateNumbers: new Set<number>(),
  };

  // recorremos el array de forma indexada
  for (let i = 0; i < arr.length; i++) {
    // En cuanto encontramos un elemento repetido
    // salimos del bucle
    if (window.has(arr[i])) {
      response.count += 1;
      response.duplicateNumbers.add(arr[i]);
      response.isDuplicate = true;
    }
    // Si no existe añadimos al set window
    window.add(arr[i]);
    // eliminamos elemento del set que está al límite
    // de la ventana (k) definida.
    // así en la siguiente iteración (i === 4)
    // el set tendra siempre un size como mucho de ventana k
    // y si hay un duplicado siempre estará dentro de la ventana de
    // como máximo k posiciones de distancia
    if (i >= k) {
      window.delete(arr[i - k]);
    }
  }

  return {
    ...response,
    // Array.from(response.duplicateNumbers)
    duplicateNumbers: [...response.duplicateNumbers],
  };
};

export {duplicateKdistance};

/*
  📌 JSON.stringify() → Convierte valores JS a una cadena JSON.

  ✅ Serializa:
    • string, number, boolean, null
    • Objetos planos { clave: valor }
    • Arrays [ ... ]
    • Objetos con método toJSON()

  🚫 No serializa directamente:
    • Set, Map → se convierten en {}
    • undefined → se omite (en objetos) o se convierte en null (en arrays)
    • function → se omite
    • Symbol → se omite
    • NaN, Infinity → se convierten en null

  💡 Tip: Para serializar Set/Map → usa "replacer":
    JSON.stringify(miDato, (_, v) => 
      v instanceof Set ? Array.from(v) : v
    );
*/
