const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './src',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './report',
        filename: 'verboseResult.html',
        expand: true,
      },
    ],
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/const', '<rootDir>/src/stores'],
}

module.exports = createJestConfig(customJestConfig)
