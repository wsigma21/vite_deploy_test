import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: 'https:wsigma21.github.io/vite_deploy_test/',
  plugins: [react()],
})
