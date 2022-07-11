import {useState} from "react";

import {ISong} from "../../utils/interfaces";
import {useApi} from "../../utils/hooks";

export const useHome = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const {getAllSongs} = useApi();

  const loadSongs = (): void => {
    getAllSongs().then((response: ISong[]) => {
      setSongs(response)
    })
  };

  return {
    songs,
    loadSongs
  }
}