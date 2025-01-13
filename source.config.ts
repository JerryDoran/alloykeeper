import { defineCollections, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineCollections({
  type: 'doc',
  dir: 'content/docs',
});

export const meta = defineCollections({
  type: 'meta',
  dir: 'content/docs',
});

// export const article = defineCollections({
//   type: 'doc',
//   dir: 'content/articles',
// });

export default defineConfig();