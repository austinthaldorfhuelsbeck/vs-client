import { Action } from "./action";

export interface Card {
  img_URL: string;
  header: string;
  subheader: string;
  actions: Array<Action | null>;
};