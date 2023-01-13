import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './contaainer/home/Home';
import Slider1 from './contaainer/Slider1';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
