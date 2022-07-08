import React, {useEffect} from "react";
import {SongList} from "./Components/SongList";
import {ISong} from "../../utils/interfaces/songInterface";

export const Home = () => {
  let [songs, setSongs] = React.useState<ISong[]>([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://demo-lyrics-api.herokuapp.com/api/lyrics')
      .then(response => response.json())
      .then(songs => {
        setTimeout(() => {
          setSongs(songs)
          console.log(songs)
          setLoading(false)
        }, 1500)

      })
  }, [])

  return (
    <div>
      {loading && <p>loading...</p>}
      {songs.length ? (<SongList songs={songs} />) : ( loading ? null : <p> no todos</p>)}
    </div>
  )

}
