import { useState } from 'react'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectFilter({ value, setFunc, arr, title }) {

  const handleChange = (event) => {
    setFunc(event.target.value)
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Pieces"
          onChange={handleChange}
        >
          {
            title === 'Categories' &&
          <MenuItem value="All">
            All
          </MenuItem>
          }
          {
            arr.map(item => (
              <MenuItem key={item.value || item} value={item.value || item}>
                {item.label || item}
              </MenuItem>

            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}