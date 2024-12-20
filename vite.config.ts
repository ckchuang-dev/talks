import { defineConfig } from 'vite'
import '@slidev/cli'
import MarkdownItMagicLink from 'markdown-it-magic-link'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            Vitest: 'https://github.com/vitest-dev/vitest',
            Rolldown: 'https://github.com/rolldown/rolldown',
            Vite: 'https://github.com/vitejs/vite',
            Oxc: {
              link: 'https://oxc.rs/',
              imageUrl:
                'https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round-bubbles.png',
            },
          },
        })
      },
    },
  },
})
