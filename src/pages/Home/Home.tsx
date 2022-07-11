import React, {useEffect} from "react";
import {Box} from "@mui/material";

import {SongList} from "./components/SongList";
import {useHome} from "./useHome";

export const Home = () => {
  const [loading, setLoading] = React.useState(true)
  const {loadSongs, songs} = useHome();

  useEffect(() => {
    loadSongs()
    setLoading(false)
  }, [])

  return (
    <Box>
      {loading && <p>loading...</p>}
      {songs ? (<SongList songs={songs} />) : ( loading ? null : <p> no songs</p>)}
    </Box>
  )
}
