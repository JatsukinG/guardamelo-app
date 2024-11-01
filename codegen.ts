// codegen.js
/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  schema: './schema.graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

module.exports = config;
