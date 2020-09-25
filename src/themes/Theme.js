import FontSFPro from "../assets/SFProText-Regular.woff";
import FontSFProSB from "../assets/SFProText-Semibold.woff";
import FontHelvetica from "../assets/HelveticaNeue-Medium.ttf";
import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
  @font-face {
     font-family: 'SFProText';
     font-style: normal;
     font-weight: 400;
     src: url("${FontSFPro}") format('woff');
  }
  @font-face {
     font-family: 'SFProText';
     font-style: normal;
     font-weight: 500;
     src: url("${FontSFProSB}") format('woff');
  }
  @font-face {
     font-family: 'HelveticaNeue-Medium';
     font-style: normal;
     font-weight: 400;
     src: url("${FontHelvetica}");
  }
`;

const theme = {
  primary: "#0070E0",
  secondary: "#006de3",
};

export default theme;
