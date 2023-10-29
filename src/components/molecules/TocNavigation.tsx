'use client'
import tocItems from '@/app/v10/tocItems'
import { TocItem } from '@/types/TocItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material'

type Props = {
  versionPrefix: string
}

function TocNavigation({ versionPrefix }: Props) {
  const versionPrefixUrl = '/' + versionPrefix + '/'

  return (
    <Box style={{ position: 'sticky', top: '10px' }}>
      <List>
        {tocItems().map((item: TocItem, keySection) => (
          <ListItem key={keySection} style={{ padding: 0 }}>
            <Accordion style={{ boxShadow: 'none' }}>
              {item.documents.length > 0 ? (
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body2">{item.section}</Typography>
                </AccordionSummary>
              ) : (
                <AccordionSummary>
                  <Typography variant="body2">
                    <Link href={versionPrefixUrl + item.sectionUrl}>
                      {item.section}
                    </Link>
                  </Typography>
                </AccordionSummary>
              )}

              {item.documents.map((document, keyDoc) => (
                <AccordionDetails key={keyDoc} style={{ marginLeft: '10px' }}>
                  <Link href={versionPrefixUrl + document.url}>
                    {document.title}
                  </Link>
                </AccordionDetails>
              ))}
            </Accordion>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TocNavigation
