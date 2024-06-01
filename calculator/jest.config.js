module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './coverage/test-report.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
        theme: 'lightTheme'
      }
    ]
  ],
};
