import { Config } from '@stencil/core';
import path from 'path';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'test',
  autoprefixCss: true,
  enableCache: true,
  plugins: [sass()],
  globalStyle: path.join(__dirname, 'src', 'styles', 'index.scss'),
  outputTargets: [
    {
      type: 'dist',
      polyfills: true,
    },
    {
      type: 'dist-custom-elements',
      dir: path.join(__dirname, 'components'),
      includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  extras: {
    scopedSlotTextContentFix: true,
  },
};
