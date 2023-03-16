import axios from "axios";

export const DevelopersPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
