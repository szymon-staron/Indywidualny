import React, { useState, useEffect, useRef } from 'react';
import styles from './loginForm.module.scss';
import Header from '../../common/header/header';
import Button from '../../common/buttonFirst/buttonFirst';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../_actions/userAction';
import Modal from '../modal/modal';

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    login: '',
    password: '',
  });

  const [showModal, setShowModal] = useState(false);

  const refEmail = useRef();

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (alert.type === 'ALERT_SUCCESS') {
      setShowModal(true);
    }
  }, [alert]);

  useEffect(() => {
    let timeout = null;
    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { login, password } = inputs;
    if (login && password) {
      const { from } = location.state || {
        from: {
          pathname: '/',
        },
      };
      dispatch(userActions.login(login, password, from));
    }
    refEmail.current.focus();
    setInputs({
      login: '',
      password: '',
    });
  };

  const wrongLabel =
    alert.type === 'ALERT_ERROR' ? (
      <div className={styles.wrongAccount}>
        <label>{alert.message}</label>
      </div>
    ) : null;

  const modalAlert = (
    <Modal show={showModal}>
      <p className={styles.alert}>{alert.message}
      teraz mozesz się zalogować</p>
    </Modal>
  );
  return (
    <form className={styles.form} onSubmit={handleSubmitLogin}>
      {modalAlert}
      <Header title="zaloguj się" />
      <fieldset className={styles.fieldset}>
        {wrongLabel}
        <div className={styles.email}>
          <label className={styles.labelForm}>
            <span>Adres e-mail*</span>
            <input
              type="email"
              name="login"
              className={styles.inputForm}
              value={inputs.login}
              autoComplete="on"
              ref={refEmail}
              onChange={handleChangeInputs}
            />
          </label>
        </div>
        <div className={styles.password}>
          <label className={styles.labelForm}>
            <span>Hasło*</span>
            <input
              type="password"
              name="password"
              className={styles.inputForm}
              value={inputs.password}
              autoComplete="on"
              onChange={handleChangeInputs}
            />
          </label>
        </div>
        <div className={styles.submitForm}>
          <Button>Zaloguj się</Button>
          <Link to="/login/forget-password" className={styles.forgetPassword}>
            Nie pamietasz hasła?
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
