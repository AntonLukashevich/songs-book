import React, {useEffect} from "react";
import {Box} from "@mui/material";

import {SongList} from "./components/SongList";
import {useHome} from "./useHome";
import {SearchInput} from "../../components";
import {TagSongFilter} from "../../components/TagSongFilter/TagSongFilter";

export const Home = () => {
  const [loading, setLoading] = React.useState(true)
  const {loadSongs, searchSongs, setSearchTerm, tagFilter, tags} = useHome();

  useEffect(() => {
    loadSongs()
    setLoading(false)
  }, [])

  return (
    <Box>
      <Box style={{display: 'flex'}}>
        <SearchInput searchQuery={setSearchTerm}/>
        <TagSongFilter tagsQuery={tagFilter} genres={tags}/>
      </Box>

      {loading && <p>loading...</p>}
      {searchSongs ? (<SongList songs={searchSongs} />) : ( loading ? null : <p> no songs</p>)}
    </Box>
  )
}
