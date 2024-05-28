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
import SignupForm from './pages/Author/SignupForm';
import WelcomePage from './pages/WelcomePage';
import LoginForm from './pages/Author/LoginForm';
import AuthorLandingPage from './pages/Author/AuthorLandingPage';
import AuthorDashboard from './pages/Author/AuthorDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <AuthProvider>
          <Routes>
            <Route path='/' element={<WelcomePage/>} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blogs/create" element={
              <BlogCreate />}/>

            <Route path="/blogs/edit/:id" element={<BlogEdit />} />
            <Route path="/blogs/delete/:id" element={<BlogDelete/>} />
            <Route path="/author/" element={<AuthorLandingPage/>} />
            <Route path="/author/signup" element={<SignupForm/>} />
            <Route path="/author/login" element={<LoginForm/>} />
            <Route path='/author/dashboard' element={<AuthorDashboard/>} />

          </Routes>

        </AuthProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App
