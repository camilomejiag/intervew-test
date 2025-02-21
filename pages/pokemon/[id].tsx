"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/app/styles/Pokedex.module.css";

interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p className={styles.loading}>Cargando...</p>;

  return (
    <div className={styles.pokedex}>
      {/* Imagen del Pokémon */}
      <div className={styles.leftPanel}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.pokemonImage} />
      </div>

      {/* Información del Pokémon */}
      <div className={styles.rightPanel}>
        <h1>{pokemon.name.toUpperCase()}</h1>
        <p><strong>ID:</strong> {pokemon.id}</p>
        <p><strong>Altura:</strong> {pokemon.height}</p>
        <p><strong>Peso:</strong> {pokemon.weight}</p>

        <h3>Tipos:</h3>
        <ul className={styles.list}>
          {pokemon.types.map((t, index) => (
            <li key={index}>{t.type.name.toUpperCase()}</li>
          ))}
        </ul>

        <h3>Habilidades:</h3>
        <ul className={styles.list}>
          {pokemon.abilities.map((a, index) => (
            <li key={index}>{a.ability.name}</li>
          ))}
        </ul>

        <h3>Estadísticas Base:</h3>
        <ul className={styles.list}>
          {pokemon.stats.map((s, index) => (
            <li key={index}>
              <strong>{s.stat.name.toUpperCase()}:</strong> {s.base_stat}
            </li>
          ))}
        </ul>

        {/* Botón de regreso */}
        <Link href="/">
          <button className={styles.backButton}>🔙 Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetail;