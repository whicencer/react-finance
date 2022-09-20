import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      h1: {
        size: string;
        weight: string;
      };
      h2: {
        size: string;
        weight: string;
      };
      h3: {
        size: string;
        weight: string;
      };
      h4: {
        size: string;
        weight: string;
      };
      h5: {
        size: string;
        weight: string;
      };
      h6: {
        size: string;
        weight: string;
      };
      h7: {
        size: string;
        weight: string;
      };
      text: {
        size: string;
        weight: string;
      };
      textBold: {
        size: string;
        weight: string;
      };
      subtitle: {
        size: string;
        weight: string;
      };
      description: {
        size: string;
        weight: string;
      };
      logo: {
        size: string;
        weight: string;
        font: string;
      };
    };
    defaultFontFamily: string;
    colors: {
      cardBackground: {
        1: string;
        2: string;
        3: string;
      }

      primaryColor: string;
      whiteColor: string;
      secondaryColor: string;
      azureColor: string;
      amberColor: string;
      greenColor: string;
      gray9: string;
    };
  }
}
