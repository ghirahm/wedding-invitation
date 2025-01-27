import url from '@rollup/plugin-url';

export default {
  plugins: [
    url({
      include: ['**/*.mp3'],
      limit: 0,
    }),
  ],
};
