import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function VersionSelect() {
  const router = useRouter()

  // TODO: ここの初期値は、urlのパスから取得する
  const [version, setVersion] = useState('v10')

  const handleChange = (event: SelectChangeEvent) => {
    setVersion(event.target.value as string)
    router.push(`/${event.target.value}`)
  }

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth variant="standard">
        <InputLabel id="version-select-label" sx={{ color: 'inherit' }}>
          version
        </InputLabel>
        {/* FIXME: hoverした時のボーダーカラーが変更できない */}
        <Select
          sx={{
            color: 'inherit',
            ':before': { borderBottomColor: 'white' },
            ':after': { borderBottomColor: 'white' },
          }}
          id="version-select"
          labelId="version-select-label"
          label="version"
          value={version}
          onChange={handleChange}
        >
          <MenuItem value={'v10'}>v10</MenuItem>
          {/* <MenuItem value={'v9'}>v9</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  )
}

export default VersionSelect
