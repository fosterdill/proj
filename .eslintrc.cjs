const functionalComponentMessage = 'See https://github.com/facebook/create-react-app/pull/8177';

const reactRules = {
  'react/jsx-newline': [2, { prevent: false, allowMultilines: false }],
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        'React.FC': functionalComponentMessage,
        FC: functionalComponentMessage,
        'React.FunctionComponent': functionalComponentMessage,
        FunctionComponent: functionalComponentMessage,
      },
    },
  ],
};

const moduleRules = {
  'unused-imports/no-unused-imports': 'warn',
  'unused-imports/no-unused-vars': ['error'],
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'no-duplicate-imports': 'error',
  'no-restricted-imports': [
    'error',
    {
      paths: [
        {
          name: 'next/link',
          importNames: ['default'],
          message: 'Please use the Link component from @chakra-ui/next-js.',
        },
        {
          name: '@chakra-ui/react',
          importNames: ['Link'],
          message: 'Please use the Link component from @chakra-ui/next-js.',
        },
      ],
      patterns: [
        {
          group: ['*/_core/*', '*../*'],
          message: 'Please import core modules from the ~/* path alias, such as ~/utils.',
        },
      ],
    },
  ],
};

// we're using native img tags instead of the Next image component at the moment
const nextRules = {
  '@next/next/no-img-element': 'off',
};

const useBig = 'Consider using Big.js or utilities from @cryptofi/core-ui for decimal safe math.';
const mathRules = [
  {
    selector: "BinaryExpression[operator='+']",
    message: useBig,
  },
  {
    selector: "BinaryExpression[operator='-']",
    message: useBig,
  },
  {
    selector: "BinaryExpression[operator='/']",
    message: useBig,
  },
  {
    selector: "BinaryExpression[operator='*']",
    message: useBig,
  },
];

module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['unused-imports', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    eqeqeq: ['error', 'always'],
    camelcase: 'error', // humps package is used to keep snake_case API field names from leaking into app code
    curly: 'error',
    'dot-notation': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-restricted-syntax': ['error', ...mathRules],
    ...reactRules,
    ...moduleRules,
    ...nextRules,
  },
};
