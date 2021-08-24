import React, { useState, useEffect } from 'react';
import ButtonFirst from '../../common/buttonFirst/buttonFirst';
import styles from './newsletter.module.scss';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [ruleAgre, setRuleAgre] = useState(false);

  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetRuleAgre = () => {
    console.log('click');
    setRuleAgre((prev) => !prev);
  };

  useEffect(() => {
    setEmail('');
    setRuleAgre(false);
  }, []);

  return (
    <section className={styles.newsletter}>
      <div className={styles.contentBox}>
        <p className={styles.title}>NEWSLETTER</p>
        <input
          type="text"
          placeholder="Podaj swój adres e-mail"
          className={styles.emailInput}
          value={email}
          onChange={handleSetEmail}
        />
        <p onClick={handleSetRuleAgre}>
          <input
            type="radio"
            className={styles.rulesAgre}
            checked={ruleAgre}
            onChange={() => handleSetRuleAgre}
          />
          Polityka prywatnosci
          <br />
          <span>
            <Link to="/" className={styles.link}>
              (zobacz więcej)
            </Link>
          </span>
        </p>
        <ButtonFirst style={styles.btn}>Zapisz się</ButtonFirst>
      </div>
    </section>
  );
};

export default Newsletter;
