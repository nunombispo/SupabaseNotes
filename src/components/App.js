import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/Auth'
import Header from './Header'
import Notes from './Notes'
import { Signup } from './SignUp'
import { Signin } from './SignIn'
import { PrivateRoute } from './PrivateRoute'

export function App() {
  return (
    <div>
      <Header/>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Notes} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;