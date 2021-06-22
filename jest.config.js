module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    'signup-protocols.ts',
    'protocols/index.ts',
    'db-add-account-protocols.ts'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
