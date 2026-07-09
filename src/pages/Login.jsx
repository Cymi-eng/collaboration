import React from 'react'

function Login() {
  return (
    <div>
        <h1>Welcome back!</h1>
        <form action="submit">
            <label htmlFor="name">Name:
            </label><input type="text" placeholder='Write your full name'/>
        </form>
    </div>
  )
}

export default Login