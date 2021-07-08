import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

const theme = extendTheme();

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme} resetCSS>
      <Box m='4'>
        <Story />
      </Box>
    </ChakraProvider>
  )
];
