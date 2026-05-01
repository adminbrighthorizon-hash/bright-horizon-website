// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const deployTarget = process.env.DEPLOY_TARGET;
const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY || '/').split('/');
const isGitHubPagesDeploy = deployTarget === 'github-pages' && !!repoOwner && !!repoName;

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: isGitHubPagesDeploy ? `https://${repoOwner}.github.io` : undefined,
  base: isGitHubPagesDeploy ? `/${repoName}` : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});