"use client";
import {useMemo, useState} from "react";

import {arrayDistinct} from "@/Sets/arrayDistinct";

const parse = (value: string) =>
  value
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0) // descarta vacíos
    .map(Number)
    .filter((n) => !Number.isNaN(n)); // descarta NaN

export default function ArrayDistinctPage() {
  const [aInput, setAInput] = useState("2,3,3,12,10,10,15,15,20");

  const res = useMemo(() => {
    const a = parse(aInput);

    return arrayDistinct([...a]); // copia defensiva por si muta
  }, [aInput]);

  return (
    <main style={{padding: 24}}>
      <h1> Array distinct (live) ➡️ Elimina duplicados</h1>
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
      </div>
      <h2>Output</h2>
      <pre>{JSON.stringify(res)}</pre>
    </main>
  );
}
