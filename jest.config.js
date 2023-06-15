module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest'
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy'
	},
	testEnvironment: 'jest-environment-jsdom'
};
