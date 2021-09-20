import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import Button from "./components/Button";

const overrides = {
  components: {
    Button,
  },
};

export default extendTheme(overrides);
