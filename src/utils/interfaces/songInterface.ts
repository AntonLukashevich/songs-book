import {ISongItem} from "./songItemInterface";

export interface ISong {
  id: number;
  name: string;
  tonality: string;
  comment?: string;
  tags?: string[];
  items?: ISongItem[];
}