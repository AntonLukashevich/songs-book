import React from "react";
import {Box} from "@mui/material";

import {ISongItemLine} from "../../../../utils/interfaces";
import {IChord} from "../../../../utils/interfaces";
import {CHORD_CHAIN} from "./constants/chordChain";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const SongPart = ({songItem}: IProps, index: number) => {
  let cordPosition = 0;

  const convertChordsToString = (chords: IChord[]) => {
    return chords.reduce((acc: string, chord: IChord) => {
      const length = CHORD_CHAIN.length;
      const pos = ((chord.position + cordPosition) % length + length) % length;
      return `${acc}${' '.repeat(chord.spaces)}${CHORD_CHAIN[pos]}${chord.postfix || ''}`
    }, '');
  }

  return(
    <Box style={STYLES.wrapper}>
      <span style={STYLES.span}>{songItem.name}</span>
      { songItem.lines.map((line:ISongItemLine, index: number) => {
        return(
          <Box style={STYLES.line} key={`${songItem.name + index}`}>
            <Box sx={STYLES.chordsLine}>
              {convertChordsToString(line.chords)}
            </Box>
            <Box>
              {line.text}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}