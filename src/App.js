import './App.css';
import { Route, Routes } from 'react-router';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import { Provider } from 'react-redux';
import { cofigureStore } from './redux/store';

function App() {
  let store = cofigureStore();
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<UserRoute />} />

          <Route path='/admin/*' element={<AdminRoute />} />

        </Routes>
      </Provider>
    </>
  );
}

export default App;
