import React from "react";
import {List} from "@mui/material";

import {SongItem} from "../SongItem";
import {IProps} from "./propsInterface";
import {STYLES} from "./constans";

export const SongList = ({songs}: IProps) => {
  return(
    <div style={STYLES.wrapper}>
      <List style={STYLES.ul}>
        {songs?.map( (song: any) => {
          return(
            <SongItem song={song} key={song.id}/>
          )
        }) }
      </List>
    </div>
  )
}