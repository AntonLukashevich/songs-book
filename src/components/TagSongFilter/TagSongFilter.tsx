import React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from "@mui/material";

import {GENRES} from "../../utils/constants";
import {IProps} from "./propsInterface";
import {MENU_PROPS} from "./constants";

export const TagSongFilter = ({genres, tagsQuery}: IProps) => {

  const changeGenresList = (tag: string) => {
    if (genres.includes(tag)) {
      tagsQuery(genres.filter((genre) => tag !== genre))
      return
    }
    tagsQuery([...genres, tag])
  }

  return (
    <FormControl sx={{width: 100, marginY: 1}}>
      <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={genres}
        input={<OutlinedInput label="Genre"/>}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MENU_PROPS}
      >
        {GENRES.map((genre) => (
          <MenuItem key={genre} value={genre}>
            <Checkbox value={genre} onChange={() => changeGenresList(genre)} checked={genres.includes(genre)}/>
            <ListItemText primary={genre}/>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}