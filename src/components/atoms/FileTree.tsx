import { Paper, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import styles from './fileTree.module.scss'

function FileTree({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const backgroundColor = theme.palette.grey[100]
  return (
    <Paper variant="outlined" sx={{ backgroundColor }}>
      <div
        className={styles.fileTree}
        style={{ backgroundColor, margin: 0, padding: '0px 10px 0px 10px' }}
      >
        {children}
      </div>
    </Paper>
  )
}

export default FileTree
