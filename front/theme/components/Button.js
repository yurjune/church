export default {
  baseStyle: {
    fontWeight: "",
  },
  sizes: {
  },
  variants: {
    solid: {
      bg: "second",
      _hover: {
        bg: "first",
        color: "white",
      },
    },
    main: {
      bg: "second",
      _hover: {
        bg: "first",
        color: "white",
      },
      px: "14px",
      h: "36px",
    },
    menu: {
      bg: "none",
      _hover: {
        bg: "first",
        color: "white",
      },
      color: "white",
      fontSize: ["18px", "18px", "18px", "22px"],
    },
    pagination: {
      mx: "2px",
      px: "8px",
      py: "2px",
      rounded: "md",
      bg: "second",
      color: "gray.700",
    },
  },
};
