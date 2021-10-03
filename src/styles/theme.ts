const convertToRem = (value: number) => `${value / 10}rem`;

export default {
  colors: {
    'primary-color': '#191920',
    'secondary-color': '#272730',
    'fav-color': '#fbc202',
    'subtext-color': '#a1a1a1',
    'font-color': '#fff',
    'error-color': '#cf3434',
    'secondary-color-text': '#e67a0e'
  },

  border: {
    radius: '1rem',
    fullradius: '9999px'
  },

  font: {
    family: '"IBM Plex Mono", monospace;',
    light: 400,
    bold: 600,
    sizes: {
      12: convertToRem(12),
      14: convertToRem(14),
      16: convertToRem(16),
      18: convertToRem(18),
      20: convertToRem(20),
      28: convertToRem(28)
    }
  },

  spacings: {
    4: convertToRem(4),
    8: convertToRem(8),
    16: convertToRem(16),
    24: convertToRem(24),
    32: convertToRem(32),
    40: convertToRem(40)
  },

  utils: {
    px: (value: string) => `
      padding-left: ${value};
      padding-right: ${value};    
    `,
    py: (value: string) => `
      padding-top: ${value};
      padding-bottom: ${value};
    `,
    mx: (value: string) => `
      margin-left: ${value};
      margin-right: ${value};
    `,
    my: (value: string) => `
      margin-top: ${value};
      margin-bottom: ${value};
    `,
    center: () => `
      display: flex;
      justify-content: center;
      align-items: center;
    `
  },

  media: {
    320: '@media only screen and (min-width: 320px)',
    375: '@media only screen and (min-width: 375px)',
    425: '@media only screen and (min-width: 425px)',
    768: '@media only screen and (min-width: 768px)'
  }
} as const;
