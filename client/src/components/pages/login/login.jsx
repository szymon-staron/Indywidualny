import React from 'react';
import styles from './login.module.scss';
import LoginForm from '../../features/loginForm/loginForm';
import CreateAccount from '../../features/createAccount/createAccount';
import Container from '../../layout/container/container';
import Header from '../../common/header/header';

const Login = () => {
  return (
    <section>
      <Header title="Moje Konto" style={styles.header} />
      <Container>
        <article className={styles.loginSection}>
          <LoginForm />
          <CreateAccount />
        </article>
      </Container>
    </section>
  );
};

export default Login;
