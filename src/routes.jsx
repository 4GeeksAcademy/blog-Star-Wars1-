import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import EntityDetail from './pages/EntityDetail';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=":type/:id" element={<EntityDetail />} />
    </Route>
  )
);