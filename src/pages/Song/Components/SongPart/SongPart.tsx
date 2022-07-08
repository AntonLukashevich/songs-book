import React from "react";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const SongPart = ({songItem}: IProps, index: number) => {
  return(
    <div key={`${songItem.name}${index}`} style={STYLES.wrapper}>
      <span style={STYLES.span}>{songItem.name}</span>
      { songItem.lines.map((line) => {
        return(
          <div style={STYLES.line}>
            {line.text}
          </div>
        )
      })}
    </div>
  )
}