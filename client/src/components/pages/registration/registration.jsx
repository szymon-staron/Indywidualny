import React, { useEffect, useRef, useState } from 'react';
import styles from './registration.module.scss';
import Header from '../../common/header/header';
import ReadMore from '../../common/readMore/readMore';
import Modal from '../../features/modal/modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { userActions } from '../../../_actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { canculateComplexity } from '../../../_helpers/utils';

const schema = yup.object().shape({
  firstName: yup.string().required('To pole jest wymagane'),
  lastName: yup.string().required('To pole jest wymagane'),
  email: yup.string().email().required('To pole jest wymagane'),
  password: yup
    .string()
    .min(6, 'Hasło musi się składać z minimum 6 znaków')
    .required('To pole jest wymagane'),
  passwordConfirmation: yup
    .string('Hasła nie są takie same')
    .required('To pole jest wymagane')
    .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
  regulations: yup
    .boolean()
    .required('to pole jest wymagane')
    .oneOf([true], 'Musisz zaakceptować zasady'),
  newsletter: yup.boolean(),
});

const Registration = () => {
  
  const progressRef = useRef();

  const alert = useSelector((state) => state.alert);

  const [status, setStatus] = useState('Brak hasło');
  const [showModal, setShowModal] = useState(false);

  const [isChecked, setIsChecked] = useState({
    all: false,
    regulations: false,
    newsletter: false,
  });
  
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => {
    dispatch(userActions.register(user));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const handleChecked = (e) => {
    if (e.target.name) {
      const { name } = e.target;
      setIsChecked((item) => ({ ...item, [name]: !item[name] }));
    } else if (!e.target.name) {
      const { title } = e.target;
      setIsChecked((item) => ({ ...item, [title]: !item[title] }));
    }
  };

  useEffect(() => {
    if (isChecked.all) {
      setIsChecked((item) => ({
        ...item,
        regulations: true,
        newsletter: true,
      }));
    } else {
      setIsChecked((item) => ({
        ...item,
        regulations: false,
        newsletter: false,
      }));
    }
  }, [isChecked.all]);

  const checkPasswordStregth = (e) => {
    const progress = progressRef.current;
    const complexity = canculateComplexity(e.target.value);

    if (complexity.value === 0) {
      setStatus('Brak hasła');
    } else if ((complexity.value >= 1) & (complexity.value < 3)) {
      setStatus('Słabe hasło');
    } else if ((complexity.value === 3) & (complexity.value < 5)) {
      setStatus('Silne hasło');
    } else if (complexity.value === 5) {
      setStatus('Bardz silne hasło');
    }

    progress.value = complexity.value;
    progress.max = complexity.max;
  };

  useEffect(() => {
    if (alert.type === 'ALERT_ERROR') {
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

  const modalAlert = (
    <Modal show={showModal}>
      <p className={styles.alert}>{alert.message}</p>
    </Modal>
  );

  return (
    <section>
      {modalAlert}
      <Header style={styles.header} title="stwórz konto" />
      <article className={styles.register}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.fieldset}>
            <div className={styles.field}>
              <label htmlFor="firstName" className={styles.label}>
                Imię <span>*</span>
              </label>
              <div className={styles.control}>
                <input
                  title="Imię"
                  type="text"
                  name="firstName"
                  className={styles.input}
                  autoComplete="off"
                  ref={register}
                />
                {errors.firstName && (
                  <p className={styles.erros}>{errors.firstName.message}</p>
                )}
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="lastname" className={styles.label}>
                Nazwisko <span>*</span>
              </label>
              <div>
                <input
                  title="Nazwisko"
                  type="text"
                  name="lastName"
                  className={styles.input}
                  autoComplete="off"
                  ref={register}
                />
                {errors.lastName && (
                  <p className={styles.erros}>{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="email-adress" className={styles.label}>
                Email <span>*</span>
              </label>
              <div>
                <input
                  title="Email"
                  type="email"
                  name="email"
                  className={styles.input}
                  autoComplete="off"
                  ref={register}
                />
                {errors.email && (
                  <p className={styles.erros}>{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Hasło <span>*</span>
              </label>
              <div>
                <input
                  title="Hasło"
                  type="password"
                  name="password"
                  className={styles.input}
                  onKeyUp={checkPasswordStregth}
                  autoComplete="off"
                  ref={register}
                />
                {errors.password && (
                  <p className={styles.erros}>{errors.password.message}</p>
                )}
              </div>
              <p className={styles.labelInfo}>
                Min. 6 znaków, w tym dwa typy (duża litera, mała litera, liczba,
                znak specjalny)
              </p>
              <div className={styles.passwordStrength}>
                Siła hasła: <span>{status}</span>
                <progress
                  value="0"
                  ref={progressRef}
                  className={styles.progress}
                ></progress>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="password-confirmation" className={styles.label}>
                Potwierdz hasło <span>*</span>
              </label>
              <div className={styles.control}>
                <input
                  type="password"
                  name="passwordConfirmation"
                  title="potwierdz hasło"
                  className={styles.input}
                  autoComplete="off"
                  ref={register}
                />
                {errors.passwordConfirmation && (
                  <p className={styles.erros}>
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.fieldCheckbox}>
              <input
                type="checkbox"
                name="all"
                checked={isChecked.all}
                onChange={handleChecked}
                className={styles.inputChecked}
              />
              <span
                className={styles.approveAll}
                onClick={handleChecked}
                title="all"
              >
                Zaznacz wszystkie zgody
              </span>
            </div>
            <div className={styles.fieldCheckbox}>
              <input
                type="checkbox"
                name="regulations"
                checked={isChecked.regulations}
                onChange={handleChecked}
                className={styles.inputChecked}
                ref={register}
              />
              <ReadMore
                maxCharacterCount="50"
                name="regulations"
                onClick={handleChecked}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                molestias cupiditate aliquid quibusdam, deleniti natus similique
                vel voluptatem veniam reiciendis iste qui aut. Ullam placeat
                nobis modi dolore perspiciatis cupiditate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quis molestias cupiditate
                aliquid quibusdam, deleniti natus similique vel voluptatem
                veniam reiciendis iste qui aut. Ullam placeat nobis modi dolore
                perspiciatis cupiditate.
              </ReadMore>
              {errors.regulations && (
                <p className={styles.erros}>{errors.regulations.message}</p>
              )}
            </div>
            <div className={styles.fieldCheckbox}>
              <input
                type="checkbox"
                name="newsletter"
                className={styles.inputChecked}
                checked={isChecked.newsletter}
                onChange={handleChecked}
                ref={register}
              />
              <ReadMore
                maxCharacterCount="50"
                name="newsletter"
                onClick={handleChecked}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                molestias cupiditate aliquid quibusdam, deleniti natus similique
                vel voluptatem veniam reiciendis iste qui aut. Ullam placeat
                nobis modi dolore perspiciatis cupiditate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quis molestias cupiditate
                aliquid quibusdam, deleniti natus similique vel voluptatem
                veniam reiciendis iste qui aut. Ullam placeat nobis modi dolore
                perspiciatis cupiditate.
              </ReadMore>
            </div>
            <button type="submit" className={styles.submit}>
              Załóż konto
            </button>
          </fieldset>
        </form>
      </article>
    </section>
  );
};

export default Registration;
