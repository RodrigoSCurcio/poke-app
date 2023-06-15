import { atom } from "jotai";
import { ITeam } from "../../interfaces/team";

export const team = {} as ITeam;

export const teamAtom = atom(team);
