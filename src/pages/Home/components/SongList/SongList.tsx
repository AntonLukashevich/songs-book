import React from "react";
import {Box, List} from "@mui/material";

import {ISong} from "../../../../utils/interfaces";
import {IProps} from "./propsInterface";
import {SongItem} from "../SongItem";
import {STYLES} from "./constans";

export const SongList = ({songs}: IProps) => {
  return (
    <Box sx={STYLES.wrapper}>
      <List sx={STYLES.ul}>
        {
          songs?.map((song: ISong) => {
            return (
              <SongItem song={song} key={song.id}/>
            )
          })
        }
      </List>
    </Box>
  )
}