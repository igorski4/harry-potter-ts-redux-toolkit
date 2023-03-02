import { Wand } from "./Wand";

export interface Card {
  id: string;
  name: string;
  actor: string;
  gender: string;
  house: string;
  image: string;
  wand: Wand;
  alive: boolean;
}
