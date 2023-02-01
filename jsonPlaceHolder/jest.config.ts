/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  preset: 'react-native',
  modulePathIgnorePatterns: ['src/__tests__/e2e'],
  setupFiles: ['<rootDir>/src/utils/jest.setup.ts'],
  testRegex: '(src/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
