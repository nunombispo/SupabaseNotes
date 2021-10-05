
function Header() {
    const divStyle={backgroundColor: 'teal'}
    return (
        <nav className="navbar navbar-dark" style={divStyle}>
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Supabase Notes</span>
            </div>
        </nav>
    );
  }
  
  export default Header;