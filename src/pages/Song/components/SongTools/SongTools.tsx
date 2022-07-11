import React from "react";
import {Box, Button} from "@mui/material";

import {ChangeTon} from "../../../../utils/enums";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const SongTools = ({handleChange, isOpen, changeTon}: IProps) => {
  return (
    <Box sx={STYLES.wrapper}>
      {isOpen &&
        <Box>
          <Button onClick={ () => { changeTon(ChangeTon.increase)} }>
            <AddOutlinedIcon color="success"></AddOutlinedIcon>
          </Button>
          <Button onClick={ () => { changeTon(ChangeTon.decrease)} }>
            <RemoveOutlinedIcon color="success"></RemoveOutlinedIcon></Button>
        </Box>
      }
      <Box>
        <Button onClick={() => {
          handleChange()
        }}>
          <MusicVideoOutlinedIcon color="success">

          </MusicVideoOutlinedIcon></Button>
      </Box>
    </Box>
  )
}