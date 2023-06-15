interface IPokeSave {
  id: string;
  pokemon: string;
  user: string;
}

export interface ITeam {
  pokemons: Array<IPokeSave>;
}
