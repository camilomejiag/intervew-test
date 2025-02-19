This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Pokemon list and detail Constructor

## Project Overview
This project is designed to construct a Pokedex using the PokeApi

## Criteria to meet
1. Fork this project into your own Github space.
2. Use the pokeapi to bring a list of pokemon
    - https://pokeapi.co/api/v2/pokemon/
3. Build a homepage which shows a list o pokemon names. When you click the pokemon name, it redirects you to a detail screen where you will find a pokedex with the basic info of the pokemon.
![Pokedex](/public/pokedex.PNG)
    - The pokemon list API doesnt bring the images and types of pokemon, so a list with just the names may be enough.
![Pokemon-list](/public/pokemon-list.PNG)
4. In the homepage, create 2 inputs to tell where the list should start and end. Example: Bring me the pokemons between number 50 and 100.
    - This can be accomplished using pagination: https://pokeapi.co/docs/v2#resource-listspagination-section
5. When finished, create a Pull Request from your own domain to the [main project](https://github.com/camilomejiag/intervew-test). 