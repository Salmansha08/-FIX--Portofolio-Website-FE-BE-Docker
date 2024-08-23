import React from 'react';
import ButtonOauth from './ButtonOauth';
import LoginForm from './LoginForm';

function SectionOauth() {
  return (
    <section>
      <div className="">
        <h4>Sign in with</h4>
        <ButtonOauth />
        <p className="text-center font-semibold">OR</p>
        <LoginForm />
      </div>
    </section>
  );
}

export default SectionOauth;
