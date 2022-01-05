import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/Home';
import NotFound from './components/NotFound';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

import { Login } from './components/user/Login';
import { Logout } from './components/user/Logout'
import { Register } from './components/user/Register'

import { Edit } from './components/post/Edit'
import { Create } from './components/post/Create'
import { Details } from './components/post/Details'
import { MyPosts } from './components/post/MyPosts'
import { AllPosts } from './components/post/AllPosts';

import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/all' element={<AllPosts />} />
            <Route path='/my-posts' element={<MyPosts />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:postId' element={<Details />} />
            <Route path='/edit/:postId' element={<Edit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
