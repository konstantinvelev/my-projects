import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout'
import { Register } from './components/Register'
import { MyPosts } from './components/MyPosts'
import { Create } from './components/Create'
import { Details } from './components/Details'
import { Edit } from './components/Edit'
import NotFound from './components/NotFound';
import { AllPosts } from './components/AllPosts';

import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/all" element={<AllPosts />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:postId" element={<Details />} />
            <Route path="/edit/:postId" element={<Edit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
