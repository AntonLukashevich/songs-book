import React, {useState} from "react";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select, SelectChangeEvent
} from "@mui/material";

import {GENRES} from "../../utils/constants";
import {IProps} from "./propsInterface";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 270,
    },
  },
};

export const TagSongFilter = ({genres, tagsQuery}:IProps) => {

  const changeGenresList = (tag: string) => {
    if(genres.includes(tag)){
      tagsQuery(genres.filter( (genre) => tag !== genre))
      return
    }
    tagsQuery([...genres, tag])
  }

  return (
    <Box>
        <FormControl sx={{ m: 1, width: 100 }}>
          <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={genres}
            input={<OutlinedInput label="Genre" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {GENRES.map((genre) => (
              <MenuItem key={genre} value={genre}>
                <Checkbox value={genre} onChange={() => changeGenresList(genre)} checked={genres.includes(genre)}/>
                <ListItemText primary={genre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </Box>
  )
}