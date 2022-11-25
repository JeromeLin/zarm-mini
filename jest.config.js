module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@tarojs/components': '@tarojs/components/dist-h5/react',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.[jt]s?(x)'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ['<rootDir>/packages/zarm-min/node_modules/(?!@taro)'],
  // setupFiles: [
  //   '<rootDir>/setup.ts',
  // ],
  // collectCoverage: true,
  // coverageReporters: ['html', 'text-summary', 'lcov'],
  // coverageDirectory: '<rootDir>/src/test/coverage',

};