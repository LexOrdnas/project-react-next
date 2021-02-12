/* eslint-disable react/jsx-no-undef */
import { lazy, Suspense } from 'react';
import { Footer, PaymentForm, OurStores, ContactInfo } from './Components/Footer';
// import { BannerWelcome } from './Components/Banner';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Menu from './Components/Menu';

import './App.css';

const Slogan  = lazy(() => import('./CodeSplitting/Slogan'));
const FooterA = lazy(() => import('./CodeSplitting/FooterA'));
const Logo = lazy(() => import('./CodeSplitting/Logo'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        
        <div class="text-center my-5 py-2">
          <Suspense fallback={
            <img 
            src="https://pa1.narvii.com/6842/21657ec1d18c1b0ee9fb184edbad56d90573213f_hq.gif" 
            height="150"
            alt="logo" />
          }>
          <Logo />
          
          </Suspense>

          <Suspense fallback={
              <p>Aguarde um momento...</p>
            }>
            <Slogan />
            <FooterA />
            </Suspense>
          </div>

        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Routes />
          </Container>
        </main>

        <footer>
          <PaymentForm />
          <OurStores />
          <ContactInfo />
          <Footer />
        </footer>

      </div>
    </BrowserRouter>

  );
}

export default App;
	