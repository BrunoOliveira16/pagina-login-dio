import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Cadastro from './pages/Cadastro';

// Components
import { Header } from './components/Header/index';
import { Footer } from './components/Footer';

function App() {
  //validação para usuário logado e deslogado
  const [ isAutenticado, setIsAutenticado ] = useState(false);
  const handleLogin = () => setIsAutenticado(true);
  const handleLogout = () => setIsAutenticado(false);
  
  function FeedWrapper() {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/feed') {
        setIsAutenticado(true);
      }
    }, [location.pathname]);

    return <Feed isAutenticado={isAutenticado} onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        {isAutenticado ? <Header autenticado={true} /> : <Header /> }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/feed' element={<FeedWrapper />} />
          <Route path='/register' element={<Cadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
