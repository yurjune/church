import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

const Didimdol = ({ Component }) => {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default Didimdol;
