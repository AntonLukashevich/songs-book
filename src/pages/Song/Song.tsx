import React, {useEffect} from "react";
import {ISong} from "../../utils/interfaces/songInterface";
import {useParams } from 'react-router-dom';
import {ISongPageParams} from "../../utils/interfaces/songPageParamsIntreface";
import {SongPart} from "./Components/SongPart/SongPart";
import {STYLES} from "./constants";

export const Song = () => {
  let [song, setSong] = React.useState<ISong>()
  const params = useParams();

  useEffect(() => {
    const songId = (params as unknown as ISongPageParams).id
    fetch(`https://demo-lyrics-api.herokuapp.com/api/lyrics/${songId}`)
      .then(response => response.json())
      .then(song => {
        setSong(song)
        console.log(song)
      })
  }, [])


  return(
    <div style={STYLES.song}>
      { song?.items?.map( (item, index) => {
        return(
          <SongPart songItem={item} index={index}/>
        )
      })}
    </div>
  )
}