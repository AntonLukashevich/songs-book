import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";

import {SongList} from "./components/SongList";
import {useHome} from "./useHome";
import {SearchInput} from "../../components";
import {TagSongFilter} from "../../components/TagSongFilter/TagSongFilter";

export const Home = () => {
  const [loading, setLoading] = useState<Boolean>(true)
  const {loadSongs, searchSongs, setSearchTerm, tagFilter, tags} = useHome();

  useEffect(() => {
    loadSongs()
    setLoading(false)
  }, [loadSongs])

  return (
    <Box>
      <Box sx={{display: 'flex'}}>
        <SearchInput searchQuery={setSearchTerm}/>
        <TagSongFilter tagsQuery={tagFilter} genres={tags}/>
      </Box>

      {loading && <p>loading...</p>}
      {searchSongs ? (<SongList songs={searchSongs}/>) : (loading ? null : <p> no songs</p>)}
    </Box>
  )
}
