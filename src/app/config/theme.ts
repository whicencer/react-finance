import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  typography: {
    h1: {
      size: '40px',
      weight: '700',
    },
    h2: {
      size: '32px',
      weight: '800',
    },
    h3: {
      size: '28px',
      weight: '700',
    },
    h4: {
      size: '28px',
      weight: '600',
    },
    h5: {
      size: '24px',
      weight: '700',
    },
    h6: {
      size: '20px',
      weight: '600',
    },
    h7: {
      size: '18px',
      weight: '700',
    },
    description: {
      size: '12px',
      weight: '400',
    },
    subtitle: {
      size: '16px',
      weight: '500',
    },
    text: {
      size: '14px',
      weight: '400',
    },
    textBold: {
      size: '14px',
      weight: '600',
    },
    logo: {
      size: '21px',
      weight: '400',
      font: 'Archivo',
    },
  },
  defaultFontFamily: 'Inter',
  colors: {
    cardBackground: {
      1: 'linear-gradient(180deg, #23379a,#09133c)',
      2: 'linear-gradient(21deg, #dd03e4, #5611ec)',
      3: `linear-gradient(37deg, rgba(213,17,17,1) 0%, rgba(35,46,162,1) 100%)`
    },
    whiteColor: '#fff',
    primaryColor: '#000',
    secondaryColor: '#0F0F13',
    azureColor: '#0062ff',
    amberColor: '#fe7e07',
    greenColor: '#15ffab',
    gray9: '#1E1E24',
  },
};

export { theme };
