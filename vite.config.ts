import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  resolve: {
    alias: [
      {
        find: '@config',
        replacement: '/src/app/config'
      },
      {
        find: '@hooks',
        replacement: '/src/app/hooks'
      },
      {
        find: '@providers',
        replacement: '/src/app/providers'
      },
      {
        find: '@typings',
        replacement: '/src/app/typings'
      },
      {
        find: '@assets',
        replacement: '/src/assets'
      },
      {
        find: '@components',
        replacement: '/src/components'
      },
      {
        find: '@pages',
        replacement: '/src/pages'
      },
      {
        find: '@services',
        replacement: '/src/services'
      },
      {
        find: '@shared',
        replacement: '/src/shared'
      },
      {
        find: '@store',
        replacement: '/src/store'
      },
      {
        find: '@styles',
        replacement: '/src/styles'
      },
      {
        find: '@utils',
        replacement: '/src/utils'
      },
      {
        find: '@widgets',
        replacement: '/src/widgets'
      },
    ]
  }
});