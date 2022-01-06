
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './router/AppLayout';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const el = document.querySelector(".loader-content");

    if (el) {
      el.remove();
      setLoading(!isLoading);
    }


  }, []);

  if (isLoading) {
    return null;
  }


  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>

    </div>
  );
}

export default App;
