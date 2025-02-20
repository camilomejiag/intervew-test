"use client";


import { useState, useEffect } from "react";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(20);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${start - 1}&limit=${end - start + 1}`
      );
      const data = await response.json();
      setPokemonList(data.results);
    }
    fetchPokemon();
  }, [start, end]);

  return (
    <div>
      <h1>Lista de Pokémon</h1>

      <div>
        <label>Desde: </label>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(Number(e.target.value))}
        />
        <label>Hasta: </label>
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(Number(e.target.value))}
        />
      </div>

      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + start}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}