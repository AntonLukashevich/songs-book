import {useCallback, useState} from "react";

import {ISong} from "../../utils/interfaces";
import {useApi} from "../../utils/hooks";

export const useSong = () => {
  const [song, setSong] = useState<ISong>()
  const {getSongById} = useApi();

  const loadSong = useCallback((songId: number): void => {
    getSongById(songId).then((response: ISong) => {
      setSong(response)
    })
  },[])

  return {
    song,
    loadSong
  }
}