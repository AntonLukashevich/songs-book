import React from "react";
import {Box, TextField} from "@mui/material";

import {IProps} from "./propsInterface";

export const SearchInput = ({searchQuery}: IProps) => {
  return(
    <Box>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue=""
        placeholder="Search"
        variant="filled"
        size="small"
        onChange = {e => searchQuery(e.target.value)}
      />
    </Box>
  )
}