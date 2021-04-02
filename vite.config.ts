import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`
        },
        resolveComponent: (name: any) => {
          return `element-plus/lib/${name}`
        }
      }]
    })
  ]
})
