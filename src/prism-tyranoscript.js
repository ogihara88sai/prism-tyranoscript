Prism.languages.tyranoscript = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true,
    },
    {
      pattern: /(^|[^\\:]);.*/,
      lookbehind: true,
      greedy: true,
    },
  ],
  script: [
    {
      pattern: /(\[iscript\])[\s\S]*?(?=\[endscript\])/i,
      lookbehind: true,
      greedy: true,
      inside: {
        'language-javascript': {
          pattern: /[\s\S]+/,
          inside: Prism.languages.javascript,
        },
      },
    },
    {
      pattern: /(@iscript\s*\n)[\s\S]*?(?=@endscript)/i,
      lookbehind: true,
      greedy: true,
      inside: {
        'language-javascript': {
          pattern: /[\s\S]+/,
          inside: Prism.languages.javascript,
        },
      },
    },
  ],
  html: {
    pattern: /(\[html\])[\s\S]*?(?=\[endhtml\])/i,
    lookbehind: true,
    greedy: true,
    inside: {
      'language-html': {
        pattern: /[\s\S]+/,
        inside: Prism.languages.html,
      },
    },
  },
  keyword: {
    pattern: /(^|\n)\s*\*[^\n]*/,
    greedy: true,
    lookbehind: true,
  },
  'class-name': {
    pattern: /(^|\n)\s*#[^\n]*/,
    greedy: true,
    /*
    inside: {
      punctuation: /#/,
    },
    */
  },
  tag: {
    pattern: /(@.+(\n|$))|(\[[^\]]+\])/,
    greedy: true,
    inside: {
      tag: {
        pattern: /^(\[|@)\/?[^\s(\]|\n)\/]+/,
        inside: {
          punctuation: /^\[|@/,
          namespace: /^[^\s(\]|\n)\/:]+:/,
        },
      },
      /*
      'special-attr': [
        {
          pattern: /\s(exp|cond)=("[^"]*"|[^\s'">=]+(?=[\s\n\]]))/i,
          lookbehind: true,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: ['javascript', 'language-javascript'],
                  inside: Prism.languages.javascript,
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: 'attr-equals',
                  },
                  /"|'/,
                ],
              },
            },
          },
        },
        {
          pattern: /\s([^=]+)=("&[^"]*"|&[^\s'">=]+(?=[\s\n\]]))/i,
          lookbehind: true,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=(["']|(?!["']))&)\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: ['javascript', 'language-javascript'],
                  inside: Prism.languages.javascript,
                },
                punctuation: {
                  pattern: /^=/,
                  alias: 'attr-equals',
                },
                keyword: {
                  pattern: /(?<=^["']{0,1})\&/,
                  alias: 'attr-equals',
                },
              },
            },
          },
        },
      ],
      */
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: 'attr-equals',
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true,
            },
          ],
          keyword: {
            pattern: /%|&/,
            lookbehind: true,
          },
        },
      },
      punctuation: /\]/,
      'attr-name': {
        pattern: /[^\s(\]|\n)\/]+/,
        inside: {
          namespace: /^[^\s(\]|\n)\/:]+:/,
        },
      },
    },
  },
};
