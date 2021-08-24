import React, { useEffect } from 'react';
import 'normalize-css';
import './styles/global.scss';
import { useDispatch } from 'react-redux';
import { AnimatedSwitch } from 'react-router-transition';
import { Route} from 'react-router-dom';
import { history } from './_helpers/history';
import Home from './components/pages/home/home';
import OurWork from './components/pages/ourWork/ourWork';
import Shop from './components/pages/shop/shop';
import Login from './components/pages/login/login';
import Contact from './components/pages/contact/contact';
import OurBasket from './components/pages/ourBasket/ourBasket';
import PageNoFound from './components/pages/pageNoFound/pageNoFound';
import MainLayout from './components/layout/mainLayout/MainLayout';
import MyAcount from './components/pages/myAcount/myAcount';
import Registration from './components/pages/registration/registration';
import { alertActions } from './_actions/alert.actions';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  });
  return (
    <MainLayout>
    <AnimatedSwitch
        atEnter={{
          opacity: 0,
        }}
        atLeave={{
          opacity: 0,
        }}
        atActive={{
          opacity: 1,
        }}
        className="switchWrapper"
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/product/:id" component={PageNoFound}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/workShop" component={OurWork} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/basket" component={OurBasket} />
        <Route exact path="/myAcount" component={MyAcount} />
        <Route exact path="/registration" component={Registration} />
        <Route component={PageNoFound} />
      </AnimatedSwitch>
    </MainLayout>
  );
}

export default App;
