module.exports = {
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['> 0.25 %', 'not dead'],
            },
          },
        ],
        [
          'next/babel',
          {
            'styled-jsx': {
              plugins: ['styled-jsx-plugin-sass'],
            },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        '@babel/plugin-syntax-do-expressions',
        '@babel/plugin-proposal-optional-chaining',
        'inline-dotenv',
        'add-react-displayname',
      ],
    },
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['> 0.25 %', 'not dead'],
            },
          },
        ],
        [
          'next/babel',
          {
            'styled-jsx': {
              plugins: ['styled-jsx-plugin-sass'],
            },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        [
          'lodash',
          { id: ['lodash', 'recompose', 'semantic-ui-react', 'ramda'] },
        ],
        '@babel/plugin-syntax-do-expressions',
        '@babel/plugin-proposal-optional-chaining',
        'transform-inline-environment-variables',
        'add-react-displayname',
        [
          'react-intl',
          {
            messagesDir: 'src/lang/.messages',
          },
        ],
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
          },
        ],
        [
          'next/babel',
          {
            'styled-jsx': {
              plugins: ['styled-jsx-plugin-sass'],
            },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        '@babel/plugin-syntax-do-expressions',
        '@babel/plugin-proposal-optional-chaining',
        'babel-plugin-inline-import-graphql-ast',
      ],
    },
  },
}
