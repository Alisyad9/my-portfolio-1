import logo from './logo.svg';
import './Nav.css';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
function App() {
  return (
    <div>
      <Nav LogoTitle="React Portfolio" />
      <Hero title="My Portfolio" button="Find out more" />
    </div>
  );
}

export default App;
