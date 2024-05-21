import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  detectOpenHandles: true,
  testMatch: ['**/tests/**/*.spec.ts'],
  bail: true,
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverage: true
}

export default config
