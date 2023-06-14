module.exports = {
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], 
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
  };
  