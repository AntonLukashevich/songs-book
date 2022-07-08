import React from "react";
import { ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {IProps} from "./propsInterface";

export const SongItem = ({song}: IProps) =>{
  return(
    <ListItem>
      <Link to={`/song/${song.id}`}>
        <strong>
          {song.id}
        </strong>
        &nbsp;
        {song.name}
      </Link>
    </ListItem>
  )
}

