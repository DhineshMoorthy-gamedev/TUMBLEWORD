import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const outDirMap = {
    web: 'dist/web',
    itch: 'dist/itch',
    editor: 'dist/editor',
    playstore: 'dist/playstore'
  };

  const outDir = outDirMap[mode] || 'dist';

  return {
    base: './',
    define: {
      __APP_TARGET__: JSON.stringify(mode || 'web')
    },
    build: {
      outDir,
      assetsDir: 'assets',
      sourcemap: true,
      emptyOutDir: true
    },
    server: {
      host: true,
      open: true
    },
    preview: {
      port: 4173,
      open: true
    }
  };
});
