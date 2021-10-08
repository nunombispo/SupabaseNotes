import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/Auth'
import Header from './Header'
import Notes from './Notes'
import { Signup } from './SignUp'

export function App() {
  return (
    <div>
      <Header/>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;