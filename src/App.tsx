import { ChakraProvider } from '@chakra-ui/react';
import Features from './components/Features';
import Header from './components/Header';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Pricing />
        <Features />
      </ChakraProvider>
    </>
  );
}

export default App;
