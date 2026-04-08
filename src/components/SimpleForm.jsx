import React from 'react'

function SimpleForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Your Name' />
        <input type="submit" value="Submit" />
    </form>
  )
}

export default SimpleForm