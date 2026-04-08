import React, { useState } from 'react'

const ControlledForm = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleOnchange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length < 6){
            setError('More than 6 character needed!');
        } else{
            setError('');
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          defaultValue={password}
          onChange={handleOnchange}
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color: 'red'}}>
        <small>{error}</small>
      </p>
    </div>
  );
}

export default ControlledForm