import React from "react";
import {Box} from "@mui/material";

import {ISongItemLine} from "../../../../utils/interfaces";
import {IChord} from "../../../../utils/interfaces";
import {CHORD_CHAIN} from "./constants/chordChain";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const SongPart = ({songItem, index, showChords, chordPosition}: IProps) => {

  const convertChordsToString = (chords: IChord[]) => {
    return chords.reduce((acc: string, chord: IChord) => {
      const length = CHORD_CHAIN.length;
      const pos = ((chord.position + chordPosition) % length + length) % length;
      return `${acc}${' '.repeat(chord.spaces)}${CHORD_CHAIN[pos]}${chord.postfix || ''}`
    }, '');
  }

  return (
    <Box sx={STYLES.wrapper}>
      <span style={STYLES.span}>{songItem.name}</span>
      {songItem.lines.map((line: ISongItemLine, index: number) => {
        return (
          <Box sx={STYLES.line} key={`${songItem.name + index}`}>
            {showChords &&
              <Box sx={STYLES.chordsLine}>
                {convertChordsToString(line.chords)}
              </Box>
            }
            <Box>
              {line.text}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}