module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
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
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
  };
  