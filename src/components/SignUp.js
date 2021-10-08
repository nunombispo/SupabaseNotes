import { useRef, useState } from 'react'

export function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    // @TODO: add sign up logic
  }

  return (
      <div className="container">
        <div className="row pt-5 text-center">
            <div className="col d-none d-lg-block"></div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">Sign in</button>
                </form>
            </div>
            <div className="col d-none d-lg-block"></div>
        </div>
    </div>
  )
}