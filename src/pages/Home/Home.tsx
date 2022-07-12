import React, {useEffect} from "react";
import {Box} from "@mui/material";

import {SongList} from "./components/SongList";
import {useHome} from "./useHome";
import {SearchInput} from "../../components";

export const Home = () => {
  const [loading, setLoading] = React.useState(true)
  const {loadSongs, searchSongs,  setSearchTerm} = useHome();

  useEffect(() => {
    loadSongs()
    setLoading(false)
  }, [])

  return (
    <Box>
      <SearchInput searchQuery={setSearchTerm}/>
      {loading && <p>loading...</p>}
      {searchSongs ? (<SongList songs={searchSongs} />) : ( loading ? null : <p> no songs</p>)}
    </Box>
  )
}
