import { extendTheme } from "@chakra-ui/react";

import styles from "./styles"
import Button from "./components/Button";

const overrides = {
  styles,
  components: {
    Button,
  },
  colors: {
    first: "#469424",
    second: "#9DD84B",
    third: "#9DD84B",
    fourth: "#808000",
    white: "#ffffff",
    grayLetter: "#808080",
    charcole: "#282828",
    warning: "#FF4646",
    blue: "#0081cc",
  },
};

export default extendTheme(overrides);
