const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('jest', {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTest.js',
  ],
  testTimeout: 20000,
  moduleNameMapper: {
    '^axios$': 'axios/dist/node/axios.cjs',
  },
});
