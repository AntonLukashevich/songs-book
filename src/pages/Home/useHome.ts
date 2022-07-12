import {useMemo, useState} from "react";

import {ISong} from "../../utils/interfaces";
import {useApi} from "../../utils/hooks";

export const useHome = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const {getAllSongs} = useApi();
  const [searchTerm, setSearchTerm] = useState('')

  const searchSongs = useMemo( () => {
    return songs.filter(song => song.name.toLowerCase().includes(searchTerm)
      || song.id.toString() == searchTerm
      || song.items?.some((item: any) => item.lines?.some( (line: any) => line.text.toLowerCase().includes(searchTerm))))
  }, [searchTerm, songs])

  const loadSongs = (): void => {
    getAllSongs().then((response: ISong[]) => {
      setSongs(response)
    })
  };

  return {
    songs,
    loadSongs,
    searchSongs,
    setSearchTerm
  }
}