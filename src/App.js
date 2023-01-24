import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import FormValidation from './component/FormVali/FormValidation';
import Header from './component/header/Header';
import Signup from './contaainer/auth/Signup';
import Contect1 from './contaainer/contect1/Contect1';
import Form2 from './contaainer/Form2/Form2';
import Home from './contaainer/home/Home';
import Kid from './contaainer/kid/Kid';
import Man from './contaainer/man/Man';
import FirstOne from './contaainer/storageClass/FirstOne';
import Student from './contaainer/Student';
import Formval from './contaainer/test/Formval';
import First from './contaainer/TRY/First';
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
        <Route exact path={"/form22"} component ={Form2} />
        <Route exact path={"/first"} component ={First} />
        <Route exact path={"/test"} component ={Formval} />

        {/* storage class */}
    <Route exact path="/storage1" component={FirstOne}/>
    <Route exact path="/student111" component={Student}/>
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
