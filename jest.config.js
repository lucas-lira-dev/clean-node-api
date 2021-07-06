module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  coveragePathIgnorePatterns: [
    'signup-protocols.ts',
    'protocols/index.ts',
    'db-add-account-protocols.ts'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
