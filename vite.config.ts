import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-hosting-files',
      closeBundle() {
        try {
          const distDirectory = join(__dirname, 'dist')
          const indexPath = join(distDirectory, 'index.html')

          if (existsSync(indexPath)) {
            copyFileSync(indexPath, join(distDirectory, '404.html'))
          }

          const cnamePath = join(__dirname, 'CNAME')
          if (existsSync(cnamePath)) {
            copyFileSync(cnamePath, join(distDirectory, 'CNAME'))
          }
        } catch {
          console.warn('Unable to copy hosting files after build')
        }
      },
    },
  ],
  base: '/',
})

