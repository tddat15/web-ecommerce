import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import { Path } from './common/constant';
import { Home, SignIn, SignUp } from './pages';


function App() {
  return (
    <Routes>
      <Route path="" element={<Navigate to={`/${Path.HOME}`} replace />} />
      <Route path={`/${Path.HOME}`} element={<Home />} />
      <Route path={`/${Path.PRODUCT}/:id`} element={<Home />} />
      <Route path={`/${Path.AUTH}/sign-up`} element={<SignUp />} />
      <Route path={`/${Path.AUTH}/sign-in`} element={<SignIn />} />

      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;
