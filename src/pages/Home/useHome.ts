import {useMemo, useState} from "react";

import {ISong} from "../../utils/interfaces";
import {useApi} from "../../utils/hooks";

export const useHome = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const {getAllSongs} = useApi();
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredSongs, setFilteredSongs] = useState<ISong[]>([])
  const [tags, setTags] = useState<string[]>([])

  const searchSongs = useMemo( () => {
    if(!searchTerm) return filteredSongs;
    return filteredSongs.filter(song => song.name.toLowerCase().includes(searchTerm)
      || song.id.toString() == searchTerm
      || song.items?.some((item: any) => item.lines?.some( (line: any) => line.text.toLowerCase().includes(searchTerm))))
  }, [searchTerm, filteredSongs])

  const tagFilter =  (tags: string[]) => {
    setTags(tags)
     if(!tags.length){
       setFilteredSongs(songs)
       return
     }
    setFilteredSongs(songs.filter((song: ISong) => song.tags?.some( (tag: string) => tags.includes(tag))))
  }

  const loadSongs = (): void => {
    getAllSongs().then((response: ISong[]) => {
      setSongs(response)
      setFilteredSongs(response
      )
    })
  };

  return {
    songs,
    loadSongs,
    searchSongs,
    setSearchTerm,
    setSongs,
    tags,
    setTags,
    tagFilter
  }
}