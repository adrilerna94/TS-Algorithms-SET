"use client";
import {useMemo, useState} from "react";

import {isArrayBSubsetOfA} from "@/Sets/arraySubset";

const parse = (value: string) =>
  value
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0) // descarta vacíos
    .map(Number)
    .filter((n) => !Number.isNaN(n)); // descarta NaN

export default function IsArrayBSubsetOfAPage() {
  const [aInput, setAInput] = useState("2,3,12,10,15,20");
  const [bInput, setBInput] = useState("5,10,15,30");

  const res = useMemo(() => {
    const a = parse(aInput);
    const b = parse(bInput);

    return isArrayBSubsetOfA([...a], [...b]); // copia defensiva por si muta
  }, [aInput, bInput]);

  return (
    <main style={{padding: 24}}>
      <h1> Array B Subset of Array A (live)</h1>
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
        ¿IS ARRAY-B SUBSET OF ARRAY-A? <strong>{JSON.stringify(res).toUpperCase()}</strong>
      </pre>
    </main>
  );
}
