import '../../global.css';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from '@/services/firebaseConfig';
import UserRoutes from '@/routes/LoginRoutes/User.routes';
import AuthRoutes from '@/routes/AuthRoutes/Auth.routes';

export default function App() {
  const firebase = initializeApp(firebaseConfig)
  const auth = getAuth(firebase)
  return (
    <ThemeProvider>
      {auth.currentUser ? <UserRoutes/> : <AuthRoutes/>}
    </ThemeProvider>
  );
}

