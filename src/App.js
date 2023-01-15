import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Signup from './contaainer/auth/Signup';
import Home from './contaainer/home/Home';
import Kid from './contaainer/kid/Kid';
import Man from './contaainer/man/Man';
import Slider1 from './contaainer/Slider1';
import Women from './contaainer/women/Women';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/man'} component={Man} />
        <Route exact path={'/women'} component={Women} />
        <Route exact path={'/kid'} component={Kid} />
        <Route exact path={'/auth'} component={Signup} />
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
