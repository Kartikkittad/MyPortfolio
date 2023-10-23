import './App.css'
import HomePage from './HomePage'
import bg from '/assets/Saly.svg'
import Nav from './navbar'
import Projects from './ProjectsPage';


function App() {
  const path = window.location.pathname;

  if (path === '/projects') {
    return <Projects />;
  }
  else {
    return (
      <>
        <HomePage />
        <img src={bg} className="img" alt="Background" />
        <Nav />
      </>
    );
  }
}

export default App;