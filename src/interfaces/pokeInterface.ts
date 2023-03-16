export interface IPokemonInfos {
  name: string;
  url: string;
}

export interface IPokedex {
  count: number;
  next: string;
  previous: string;
  results: Array<IPokemonInfos>;
}

interface IAbility {
  name: string;
  url: string;
}

interface IAbilities {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

interface IGameIndices {
  game_index: number;
  version: IPokemonInfos;
}

interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: Array<IPokemonInfos>;
}

interface IMoves {
  move: IPokemonInfos;
  version_group_details: Array<IVersionGroupDetails>;
}

interface ISprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface IType {
  slot: number;
  type: IPokemonInfos;
}

export interface IPokemon {
  abilities: Array<IAbilities>;
  base_experience: number;
  forms: Array<IPokemonInfos>;
  game_indices: Array<IGameIndices>;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<IMoves>;
  name: string;
  order: number;
  species: IPokemonInfos;
  sprites: ISprites;
  weight: number;
  types: Array<IType>;
}
