import { useRef, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

export function Signin() {
  const emailRef = useRef()
  const passwordRef = useRef()

  // Get signIn function from the auth context
  const { signIn } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      history.push('/')
    }
  }

  return (
      <div className="container">
        <div className="row pt-5 text-center">
            <div className="col d-none d-lg-block"></div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={emailRef}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={passwordRef}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-success mb-3" type="submit">Sign in</button>
                </form>
                <p>
                  Don't have an account yet? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
            <div className="col d-none d-lg-block"></div>
        </div>
    </div>
  )
}