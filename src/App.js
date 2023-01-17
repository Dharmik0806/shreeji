import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Signup from './contaainer/auth/Signup';
import Contect1 from './contaainer/contect1/Contect1';
import Home from './contaainer/home/Home';
import Kid from './contaainer/kid/Kid';
import Man from './contaainer/man/Man';
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
        <Route exact path={'/contect1'} component={Contect1}/>
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
