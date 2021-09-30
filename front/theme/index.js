import { extendTheme } from "@chakra-ui/react";

import styles from "./styles"
import Button from "./components/Button";

const overrides = {
  styles,
  components: {
    Button,
  },
  colors: {
    first: "#407927",
    second: "#81c147",
    third: "#679e35",
    fourth: "#808000",
    white: "#ffffff",
    grayLetter: "#808080",
    charcole: "#282828",
  },
};

export default extendTheme(overrides);
