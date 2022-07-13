import React from "react";
import {ListItem} from "@mui/material";
import {Link} from "react-router-dom";

import {BaseRoutePaths} from "../../../../utils/enums";
import {IProps} from "./propsInterface";

export const SongItem = ({song}: IProps) => {
  return (
    <ListItem>
      <Link to={`${BaseRoutePaths.song}/${song.id}`}>
        <strong>
          {song.id}
        </strong>
        {song.name}
      </Link>
    </ListItem>
  )
}

