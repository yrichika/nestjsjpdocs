'use client'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import TocNavigation from '../molecules/TocNavigation'
import VersionSelect from '../molecules/VersionSelect'

type Props = {
  versionPrefix: string
}

function MenuBar({ versionPrefix }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      // REFACTOR: この関数はどこかに移動
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setMenuOpen(open)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box display={{ sm: 'block', md: 'none' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer open={menuOpen} onClose={toggleMenu(false)}>
            <TocNavigation versionPrefix={versionPrefix} />
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO: icon
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link
              href="https://docs.nestjs.com/"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              本家のサイト docs.nestjs.com
            </Link>
          </Box>
          <VersionSelect />
          <Button
            color="inherit"
            href="https://github.com/yrichika/nestjsjpdocs"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </Button>
          <Button
            color="inherit"
            href="https://twitter.com/yrichika"
            target="_blank"
            rel="noopener"
          >
            {/* TODO: Xのアイコンに修正 */}
            <TwitterIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MenuBar
