"use client";
import {useMemo, useState} from "react";

import {duplicateKdistance} from "@/Sets/arrayDuplicateKdistance";

const parse = (value: string) =>
  value
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0) // descarta vacíos
    .map(Number)
    .filter((n) => !Number.isNaN(n)); // descarta NaN

export default function DuplicateKdistancePage() {
  const [aInput, setAInput] = useState("2,3,3,12,10,10,15,15,20");
  const [bInput, setBInput] = useState("5");

  // memoizamos (guardamos) el valor resultante de la función
  // solo volvemos a recalcular si cambian las dependencias (inputs)
  const res = useMemo(() => {
    const a = parse(aInput);
    const b = Number.isNaN(Number(bInput)) ? 0 : Number(bInput);

    return duplicateKdistance([...a], b); // copia defensiva por si muta
  }, [aInput, bInput]);

  return (
    <main style={{padding: 24}}>
      <h1> Array duplicateKdistance (live)</h1>
      <p>
        <strong>True si hay duplicados en K distance(menor o igual)</strong>
      </p>
      <h2>Input</h2>
      <div style={{display: "flex", gap: 12, marginBottom: 12}}>
        <label>
          Array:
          <input
            style={{marginLeft: 8, width: 320}}
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
          />
        </label>
        <label>
          K Distance
          <input
            style={{marginLeft: 8, width: 320}}
            value={bInput}
            onChange={(e) => setBInput(e.target.value)}
          />
        </label>
      </div>
      <h2>Output</h2>
      <pre>
        ¿ES duplicateKdistance? <strong>{JSON.stringify(res).toUpperCase()}</strong>
      </pre>
    </main>
  );
}
