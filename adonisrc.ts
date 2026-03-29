import { defineConfig } from '@adonisjs/core/app';
export default defineConfig({
  directories: { config: 'config', commands: 'commands', public: 'public' },
  providers: [() => import('@adonisjs/core/providers/app_provider')],
  preloads: [() => import('./start/routes.js')],
});
