import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <ChakraProvider>
      <ParentComponent />
    </ChakraProvider>
  );
}

export default App;
