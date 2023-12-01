'use client'
import { Box, Link, List, ListItem } from '@mui/material'
import { usePathname } from 'next/navigation'

type Props = {
  listOfContents: {
    id: string
    title: string
  }[]
}

function ListOfContents({ listOfContents }: Props) {
  const currentPathPrefix = usePathname() + '#'

  return (
    <Box style={{ position: 'sticky', top: '10px' }}>
      <List>
        {listOfContents.map((item, key) => {
          return (
            <ListItem key={key} style={{ padding: 0, marginTop: '15px' }}>
              <Link href={currentPathPrefix + item.id} underline="none">
                {item.title}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default ListOfContents
