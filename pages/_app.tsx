import '../styles/globals.css';
import Layout from '../components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FirebaseAuthProvider } from '../store/auth-context';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

const theme = createTheme({
  typography: {
    fontFamily: `"Rubik", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      main: '#6D28D9',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <FirebaseAuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FirebaseAuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
