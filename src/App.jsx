import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import BlogPage from './pages/Blog/BlogPage';
import BlogDetails from './pages/Blog/BlogDetails';
import BlogCreate from './pages/Blog/BlogCreate';
import BlogEdit from './pages/Blog/BlogEdit';
import BlogDelete from './pages/Blog/BlogDelete';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blogs/create" element={<BlogCreate />} />
          <Route path="/blogs/edit/:id" element={<BlogEdit />} />
          <Route path="/blogs/delete/:id" element={<BlogDelete />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
