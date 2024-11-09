import { ThemeProvider } from '@/providers/ThemeProvider';
import 'react-native-gesture-handler';
import '../../global.css';

import Routes from '@/routes/LoginRoutes/index.routes';


export default function App() {

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

