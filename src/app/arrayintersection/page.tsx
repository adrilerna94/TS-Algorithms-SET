"use client";
import {useMemo, useState} from "react";

import {arrayIntersection} from "@/Sets/arrayIntersection";

const parse = (value: string) =>
  value
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0) // descarta vacíos
    .map(Number)
    .filter((n) => !Number.isNaN(n)); // descarta NaN

export default function ArrayIntersectionPage() {
  const [aInput, setAInput] = useState("2,3,3,12,10,10,15,15,20");
  const [bInput, setBInput] = useState("5,10,10,15,30");

  const res = useMemo(() => {
    const a = parse(aInput);
    const b = parse(bInput);

    return arrayIntersection([...a], [...b]); // copia defensiva por si muta
  }, [aInput, bInput]);

  return (
    <main style={{padding: 24}}>
      <h1> Descendent Sorted Array Intersection (live)</h1>
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
        <label>
          Array C:
          <input
            style={{marginLeft: 8, width: 320}}
            value={bInput}
            onChange={(e) => setBInput(e.target.value)}
          />
        </label>
      </div>
      <h2>Output</h2>
      <pre>{JSON.stringify(res)}</pre>
    </main>
  );
}
