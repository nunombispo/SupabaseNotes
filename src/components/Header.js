import { useHistory } from 'react-router'
import { useAuth } from '../contexts/Auth'

function Header() {
    const { user, signOut } = useAuth()

    const history = useHistory()

    async function handleSignOut() {
        // Ends user session
        await signOut()
    
        // Redirects the user to Login page
        history.push('/signin')
    }

    const divStyle={backgroundColor: 'teal'}
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={divStyle}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Supabase Notes</span>
                { user && <>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">      
                        <div className="navbar-nav">
                            <a className="nav-link">{user?.email}</a>
                            <a className="nav-link active" onClick={handleSignOut}>Sign out</a>
                        </div>
                    </div></>
                }
            </div>
        </nav>
    );
  }
  
  export default Header;