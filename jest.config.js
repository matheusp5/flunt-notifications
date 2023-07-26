module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'], // Ignore the 'dist' folder
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
