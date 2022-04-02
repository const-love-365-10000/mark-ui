import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'm-webcomponent',
  plugins: [
    sass({
      injectGlobalPaths: ['./src/style/index.scss', './src/style/animation.scss', './src/style/utils.css'],
    }),
  ],

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
