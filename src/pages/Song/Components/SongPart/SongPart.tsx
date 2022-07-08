import React from "react";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";
import {IChord} from "../../../../utils/interfaces/chordInterface";

export const SongPart = ({songItem}: IProps, index: number) => {
  let cordPosition = 0;
  const CHORD_CHAIN = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "H"];

  function convertChordsToString(chords: IChord[]){
    const line = chords.reduce((acc, chord) => {
      const length = CHORD_CHAIN.length;
      const pos = ((chord.position + cordPosition) % length + length) % length;
      return `${acc}${' '.repeat(chord.spaces)}${CHORD_CHAIN[pos]}${chord.postfix || ''} `
    }, "");
    return line;
  }

  return(
    <div key={`${songItem.name}${index}`} style={STYLES.wrapper}>
      <span style={STYLES.span}>{songItem.name}</span>
      { songItem.lines.map((line) => {
        return(
          <div style={STYLES.line}>
            <div>
              {convertChordsToString(line.chords)}
            </div>
            {line.text}
          </div>
        )
      })}
    </div>
  )
}