import {ISongItemLine} from "./songItemLineInterface";

export interface ISongItem {
  name: string;
  iText?: string;
  lines: ISongItemLine[];
}