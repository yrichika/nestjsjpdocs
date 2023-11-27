import FileTree from '@/components/atoms/FileTree'
import { Box } from '@mui/material'

function ModuleDirectoryStructureExample() {
  return (
    <Box>
      <FileTree>
        <ul>
          <li>
            src
            <ul>
              <li>
                cats
                <ul>
                  <li>
                    dto
                    <ul>
                      <li>create-cat.dto.ts</li>
                    </ul>
                  </li>
                  <li>
                    interfaces
                    <ul>
                      <li>cat.interface.ts</li>
                    </ul>
                  </li>
                  <li>cats.controller.ts</li>
                  <li>cats.service.ts</li>
                </ul>
              </li>
              <li>app.module.ts</li>
              <li>main.ts</li>
            </ul>
          </li>
        </ul>
      </FileTree>
    </Box>
  )
}

export default ModuleDirectoryStructureExample
