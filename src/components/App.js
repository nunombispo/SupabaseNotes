import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/Auth'
import Header from './Header'

export function App() {
  return (
    <div>
      <Header/>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}