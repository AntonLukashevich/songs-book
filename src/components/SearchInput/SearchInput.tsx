import React from "react";
import {Box, TextField} from "@mui/material";

import {IProps} from "./propsInterface";
import {STYLES} from "./constants/style";

export const SearchInput = ({searchQuery}: IProps) => {
  return (
    <Box sx={STYLES.wrapper}>
      <TextField
        sx={{width: '100%'}}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue=""
        placeholder="Search"
        onChange={e => searchQuery(e.target.value)}
      />
    </Box>
  )
}