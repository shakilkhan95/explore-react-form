import React, { useState } from 'react'

const ControlledForm = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password,)
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

    const handleNameChange = (e) => {
      setName(e.target.value);
    }
  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} defaultValue={name} type="text" name="name" placeholder='name' />
        <br />
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