'use client'
import tocItems from '@/app/v10/tocItems'
import { Document, TocItem } from '@/types/TocItem'
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
import { usePathname } from 'next/navigation'

type Props = {
  versionPrefix: string
}

function TocNavigation({ versionPrefix }: Props) {
  const versionPrefixUrl = '/' + versionPrefix + '/'
  const currentPath = usePathname()
  const lastPathCurrentString = currentPath.substring(
    currentPath.lastIndexOf('/') + 1
  )

  const defaultExpanded = (documents: Document[]) => {
    return documents.some(document => {
      // FIXME: パスの最後のみを比較しているので、違うディレクトリでも、
      // 最後が同じ名前のパスだった場合にマッチしてしまうことがある
      const lastPathDocumentUrlString = document.url.substring(
        document.url.lastIndexOf('/') + 1
      )
      return lastPathDocumentUrlString === lastPathCurrentString
    })
  }

  return (
    <Box style={{ position: 'sticky', top: '10px' }}>
      <List>
        {tocItems().map((item: TocItem, keyChapter) => (
          <ListItem key={keyChapter} style={{ padding: 0 }}>
            <Accordion
              style={{ boxShadow: 'none' }}
              defaultExpanded={defaultExpanded(item.documents)}
            >
              {item.documents.length > 0 ? (
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body2">{item.chapter}</Typography>
                </AccordionSummary>
              ) : (
                <AccordionSummary>
                  <Typography variant="body2">
                    <Link
                      href={versionPrefixUrl + item.chapterUrl}
                      underline="none"
                    >
                      {item.chapter}
                    </Link>
                  </Typography>
                </AccordionSummary>
              )}

              {item.documents.map((document, keyDoc) => (
                <AccordionDetails key={keyDoc} style={{ marginLeft: '10px' }}>
                  <Link href={versionPrefixUrl + document.url} underline="none">
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
