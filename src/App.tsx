import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { WebToonList } from './pages/WebtoonList';

export function App() {
  return (
     <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/webtoons" element={<WebToonList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}