import {ISongItem} from "../../../../utils/interfaces";

export interface IProps {
  songItem: ISongItem;
  index: number;
  showChords: boolean;
  chordPosition: number;
}