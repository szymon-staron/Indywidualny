import React from 'react';

const Container = ({ children,id }) => {
  return (
    <section
      style={{
        maxWidth: '1220px',
        margin: '0 auto',
      }}
      id={id}
    >
      {children}
    </section>
  );
};

export default Container;
