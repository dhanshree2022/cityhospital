import './App.css';
import { Route, Routes } from 'react-router';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './context/theme.context';
import { SnackbarProvider } from 'notistack';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Alert />
              <Routes>
                <Route path='/*' element={<UserRoute />} />


                <Route path='/admin/*' element={<AdminRoute />} />

              </Routes>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;