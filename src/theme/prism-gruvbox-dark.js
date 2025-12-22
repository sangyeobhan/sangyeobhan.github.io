// Gruvbox Dark theme for Prism
// Based on the popular Gruvbox color scheme
const theme = {
  plain: {
    color: '#ebdbb2',
    backgroundColor: '#282828',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#928374',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#b8bb26',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#ebdbb2',
      },
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: '#d3869b',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#fe8019',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#8ec07c',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#fabd2f',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#fb4934',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#fabd2f',
      },
    },
    {
      types: ['char'],
      style: {
        color: '#b8bb26',
      },
    },
    {
      types: ['builtin'],
      style: {
        color: '#fe8019',
      },
    },
  ],
};

export default theme;
