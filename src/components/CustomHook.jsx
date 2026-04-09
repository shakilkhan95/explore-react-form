import React from 'react'
import useInputField from '../hook/useInputField'

const CustomHook = () => {
    const [email, emailOnchange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
  return (
    <div>
      <h1>Custom Hook</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          defaultValue={email}
          onChange={emailOnchange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input defaultValue={password} onChange={passwordOnChange} type="password" name="password" placeholder='Password' />
        
        <br />
        <input type="submit" value="Submit" />

      </form>
    </div>
  );
}

export default CustomHook