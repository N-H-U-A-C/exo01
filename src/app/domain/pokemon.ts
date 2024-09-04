import {Type} from "./type.js";
import {Attack} from "./attack";
import {Aera} from "./aera";

export type Pokemon =
  {
    name: string;
    description: string;
    types: Type[];
    attacks: Attack[];
    areas: Aera[];
  }
