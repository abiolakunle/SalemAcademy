
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './router/AppLayout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {



  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>

    </div>
  );
}

export default App;
