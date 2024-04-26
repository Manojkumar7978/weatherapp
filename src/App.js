import { Box } from '@chakra-ui/react';
import './App.css';
import Weather from './components/weather';

function App() {
  return (
    <Box className="main_container">
      <Weather/>
    </Box>
  );
}

export default App;
