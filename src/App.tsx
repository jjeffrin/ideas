import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import Fonts from './components/Fonts';

import { AppHeader } from './components/AppHeader';
import { IdeaInput } from './components/IdeaInput';
import { Ideas } from './components/Ideas';

function App() {

  const config = {
    useSystemColorMode: true,
  }

  const appTheme = extendTheme({
    fonts: {
      heading: "SFProDisplay-Black",
      body: "SFProDisplay-Medium"
    },
    config
  })

  return (
    <ChakraProvider theme={appTheme}>

      {/* initialize fonts! */}
      <Fonts />

      {/* application container */}
      <Container mt={'2em'}>

        {/* app header */}
        <AppHeader />

        {/* idea input */}
        <IdeaInput />

        {/* list all ideas */}
        <Ideas />

      </Container>
    </ChakraProvider>
  );
}

export default App;
