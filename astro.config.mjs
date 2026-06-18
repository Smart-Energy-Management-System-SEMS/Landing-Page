// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Configurado para GitHub Pages (sitio de proyecto bajo la organización):
//   https://smart-energy-management-system-sems.github.io/SEMS-Landing-Page/
// Si usas un dominio propio o publicas en la raíz, cambia `site` y borra `base`.
export default defineConfig({
  site: 'https://smart-energy-management-system-sems.github.io',
  base: '/SEMS-Landing-Page',
  vite: {
    plugins: [tailwindcss()],
  },
});
