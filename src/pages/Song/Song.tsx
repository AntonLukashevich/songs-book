import React, {useEffect} from "react";
import {useParams } from 'react-router-dom';
import {Box} from "@mui/material";

import {ISongPageParams} from "../../utils/interfaces";
import {SongTools} from "./components/SongTools/SongTools";
import {SongPart} from "./components/SongPart/SongPart";
import {STYLES} from "./constants";
import {useSong} from "./useSong";

export const Song = () => {
  const params = useParams();
  const {song, loadSong} = useSong()

  useEffect(() => {
    const songId = (params as unknown as ISongPageParams).id
    loadSong(songId)
  }, [])

  return(
    <Box style={STYLES.song}>
      <SongTools/>
      { song?.items?.map( (item, index) => {
        return(
          <SongPart songItem={item} index={index} key={`${item.name + index}`}/>
        )
      })}
    </Box>
  )
}