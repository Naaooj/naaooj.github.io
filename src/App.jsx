import './App.scss';
import { Route, Routes } from "react-router-dom";
import LoadingComponent from './components/loading/LoadingComponent';
import { useEffect, useState } from 'react';
import HomeComponent from './pages/home/HomeComponent';
import ContactComponent from './pages/contact/ContactComponent';
import FooterComponent from './components/footer/FooterComponent';
import NavbarComponent from './components/navbar/NavbarComponent';

function App() {

  // Create a loading state variable and a function to update it, in order to simulate the page load
  const [loading, setLoading] = useState(true);

  // Create a basic hook that will be executed once the page is rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoadingComponent loading={loading} />
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='contact' element={<ContactComponent />} />
        <Route 
          path='*'
          element={
            <main style={{ padding: '1rem'}}>
              <p>There is nothing here :)</p>
            </main>
          }
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
