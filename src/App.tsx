
import './App.css';

import AppNavMenu from './components/molecules/app-nav-menu/AppNavMenu';
import { useState } from 'react';
import AppHeader from './components/molecules/app-header/AppHeader';
import AppNavItem from './components/atoms/app-nav-item/AppNavItem';
import AppFixedParallaxSection from './components/atoms/app-fixed-parallax-section/AppFixedParallaxSection';
import AppArticleSection from './components/atoms/app-article-section/AppArticleSection';
import AppArticleImageGrid from './components/atoms/app-article-image-grid/AppArticleImageGrid';
import AppHeroBanner from './components/atoms/app-hero-banner/AppHeroBanner';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from './components/atoms/app-footer/AppFooter';
import AppSubFooter from './components/atoms/app-sub-footer/AppSubFooter';
import AppMenu from './components/molecules/app-menu/AppMenu';

const App = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const menuButtonClicked = (state: boolean) => {
    setMenuOpened(state)
  }

  return (
    <div className="App">
      <AppMenu />

      {/* <AppNavMenu open={menuOpened} setMenuOpened={setMenuOpened} openPosition={0} closedPosition={-450}>
        <AppNavItem linkText="Homes" />
        <AppNavItem linkText="About Us" />
        <AppNavItem linkText="Admissions" />
        <AppNavItem linkText="Gallery" />
      </AppNavMenu> */}
      <AppHeader backgroundImg={"./assets/images/home-header-banner.webp"} />
      <AppFixedParallaxSection backgroundColor={"var(--dark-blue-1)"} contentPosition={-1}>
        <h2>Our Ethos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquid corporis provident nobis? Vel dolor itaque saepe temporibus. Dolores quidem voluptatibus a fuga repudiandae pariatur debitis cumque laboriosam perspiciatis atque. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
      </AppFixedParallaxSection>
      <AppFixedParallaxSection backgroundColor={"#000"} contentPosition={-2}>
        <h2>Salem Academy</h2>

      </AppFixedParallaxSection>
      <AppArticleSection>
        <h2>About Salem Academy</h2>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

      </AppArticleSection>
      <AppArticleImageGrid backgroundColor="var(--green-grey)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={true} />
      <AppArticleImageGrid backgroundColor="var(--dark-blue-1)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={false} />
      <AppArticleImageGrid backgroundColor="var(--light-grey)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={true} />
      <AppHeroBanner backgroundImageUrl={"./assets/images/home-header-banner.webp"} />


      <Container fluid style={{ backgroundColor: "var(--green-grey)" }}>
        <Row>
          <Col md={6}>
            <AppArticleSection backgroundColor="var(--green-grey)">
              <h2>Join us</h2>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

            </AppArticleSection>
          </Col>
          <Col md={6}>
            <AppArticleSection backgroundColor="var(--green-grey)" >
              <h2>Support us</h2>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

            </AppArticleSection>
          </Col>
        </Row>
      </Container>
      <AppFooter />
      <AppSubFooter />



    </div>
  );
}

export default App;
