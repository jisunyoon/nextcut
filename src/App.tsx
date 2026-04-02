import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
     <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}