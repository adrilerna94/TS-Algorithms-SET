"use client";
import {useMemo, useState} from "react";

import {disjoint} from "@/Sets/arrayDisjoint";

const parse = (value: string) =>
  value
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0) // descarta vacíos
    .map(Number)
    .filter((n) => !Number.isNaN(n)); // descarta NaN

export default function DisjointPage() {
  const [aInput, setAInput] = useState("2,3,3,12,10,10,15,15,20");
  const [bInput, setBInput] = useState("5,10,10,15,30");

  // memoizamos (guardamos) el valor resultante de la función
  // solo volvemos a recalcular si cambian las dependencias (inputs)
  const res = useMemo(() => {
    const a = parse(aInput);
    const b = parse(bInput);

    return disjoint([...a], [...b]); // copia defensiva por si muta
  }, [aInput, bInput]);

  return (
    <main style={{padding: 24}}>
      <h1> Array disjoint (live)</h1>
      <p>
        <strong>True si ningún elemento en Array A existe en Array B</strong>
      </p>
      <h2>Input</h2>
      <div style={{display: "flex", gap: 12, marginBottom: 12}}>
        <label>
          Array A:
          <input
            style={{marginLeft: 8, width: 320}}
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
          />
        </label>
        <label>
          Array B:
          <input
            style={{marginLeft: 8, width: 320}}
            value={bInput}
            onChange={(e) => setBInput(e.target.value)}
          />
        </label>
      </div>
      <h2>Output</h2>
      <pre>
        ¿ES DISJOINT? <strong>{JSON.stringify(res).toUpperCase()}</strong>
      </pre>
    </main>
  );
}
