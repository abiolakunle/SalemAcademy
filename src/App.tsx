import logo from './logo.svg';
import './App.css';
import AppHamburger from './components/atoms/hamburger/AppHamburger';
import AppNavMenu from './components/molecules/nav-menu/AppNavMenu';
import { useState } from 'react';
import AppHeader from './components/molecules/app-header/AppHeader';

const App = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const menuButtonClicked = (state: boolean) => {
    setMenuOpened(state)
  }

  return (
    <div className="App">
      <AppHamburger handleClick={(state: boolean) => menuButtonClicked(state)} />
      <AppNavMenu open={menuOpened} setMenuOpened={setMenuOpened} />
      <AppHeader backgroundImg={"./assets/images/home-header-banner.webp"} />

    </div>
  );
}

export default App;
