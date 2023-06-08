/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': '@swc/jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(preact|@testing-library|@preact)/)'],
    setupFilesAfterEnv: ['./setup-tests.ts']
}

module.exports = config
