import React from "react";
import {SongItem} from "../SongItem";
import {STYLES} from "./constans";
import {List} from "@mui/material";
import {IProps} from "./propsInterface";

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