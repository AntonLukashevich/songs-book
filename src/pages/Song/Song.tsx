import React, {useEffect, useState} from "react";
import {useParams } from 'react-router-dom';
import {Box} from "@mui/material";

import {ISongPageParams} from "../../utils/interfaces";
import {SongTools} from "./components/SongTools/SongTools";
import {SongPart} from "./components/SongPart/SongPart";
import {useSong} from "./useSong";
import {STYLES} from "./constants";

export const Song = () => {
  const params = useParams();
  const {song, loadSong} = useSong()
  const [showTools, setShowTools] = useState(false);
  const [chordPos, setChordPos] = useState(0)

  useEffect(() => {
    const songId = (params as unknown as ISongPageParams).id
    loadSong(songId)
  }, [])

  const showSongTools = (): void => {
    setShowTools(!showTools)
  }

  const changeTonality = (value: number) => {
    setChordPos(chordPos + value)
  }

  return(
    <Box style={STYLES.song}>
      <SongTools handleChange={showSongTools}
                 isOpen={showTools}
                 changeTon={changeTonality}
      />
      {song?.items?.map( (item, index) =>
          <SongPart songItem={item}
                    index={index}
                    showChords={showTools}
                    chordPosition={chordPos}
                    key={`${item.name + index}`}
          />
      )}
    </Box>
  )
}