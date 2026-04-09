import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
  return (
    <div>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} name="email" placeholder='Email' required />
            <br />
            <input type="password" ref={passwordRef} name='password' placeholder='Password' />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default UncontrolledForm