import logo from './logo.svg';
import './Nav.css';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
function App() {
  return (
    <div>
      <Nav LogoTitle="React Portfolio" />
      <Hero />
    </div>
  );
}

export default App;
