import React from "react";
import {Box, ListItem} from "@mui/material";
import {Link} from "react-router-dom";

import {BaseRoutePaths} from "../../../../utils/enums";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const SongItem = ({song}: IProps) => {
  return (
    <Link to={`${BaseRoutePaths.song}/${song.id}`} style={STYLES.link}>
      <ListItem sx={STYLES.songItem}>
        <Box sx={STYLES.songItemId}>
          <strong>
            {song.id}
          </strong>
        </Box>
        <Box sx={STYLES.songItemTitle}>
          {song.name}
        </Box>
      </ListItem>
    </Link>
  )
}

