/** @type { import('jest').Config } */
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!react-dnd)/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/config/jest.ts'],
    clearMocks: true,
};
