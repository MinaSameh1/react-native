/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['src/__tests__/e2e'],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json'
      }
    ]
  },
  // setupFiles: ['<rootDir>/src/utils/setupTests.ts'],
  testRegex: '(src/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
