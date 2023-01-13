import { Route } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <switch>
        <Route exact path={'/'} component={Home} />
      </switch>
      <Footer />
    </>
  );
}

export default App;
