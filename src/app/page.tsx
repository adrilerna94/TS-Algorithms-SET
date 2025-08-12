// app/page.tsx

import React from "react";
import "./globals.css"; // Asegúrate de tener este archivo si usas CSS global
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="title">Bienvenido a mi sitio</h1>
      <p className="subtitle">Este es un proyecto para practicar algoritmos en typescript </p>
      <Link href="/arrayunion"> ArrayUnion</Link>
      <Link href="/arrayintersection"> ArrayIntersection</Link>
      <Link href="/arraydistinct"> ArrayDistinct</Link>
    </main>
  );
}
