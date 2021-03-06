module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  quoteProps: 'consistent',
  printWidth: 80,
  importOrder: [
    'next',
    'react',
    '@chakra-ui/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/types/(.*)$',
    '^@/hooks/(.*)$',
    '^@/lib/(.*)$',
    '^@/modules/(.*)$',
    '^@/components/(.*)$',
    '^@/constants/(.*)$',
    '^@/public/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
