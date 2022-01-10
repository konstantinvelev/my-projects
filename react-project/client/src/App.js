import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/layout/Home';
import WentWrong from './components/common/WentWrong';

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
import { LoggedRoutes } from './components/privateRoutes/LoggedRoutes';
import { NotLoggedRoutes } from './components/privateRoutes/NotLoggedRoutes';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path='*' element={<WentWrong />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/details/:postId' element={<Details />} />
            <Route path='/all' element={<AllPosts />} />
            <Route element={<NotLoggedRoutes />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
            </Route>
            <Route element={<LoggedRoutes />}>
              <Route path='/my-posts' element={<MyPosts />} />
              <Route path='/create' element={<Create />} />
              <Route path='/edit/:postId' element={<Edit />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
