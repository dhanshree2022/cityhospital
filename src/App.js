import './App.css';
import { Route, Routes } from 'react-router';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<UserRoute />} />
        
        <Route path='/admin/*' element={<AdminRoute />} />

      </Routes>
    </>
  );
}

export default App;
