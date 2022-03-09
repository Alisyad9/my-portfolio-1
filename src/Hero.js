import './Hero.css';
import background from './image/red.jpg';

function Hero(props) {
  const heroBackground = {
    backgroundImage: `url(${background})`,
    height: '50vh',
    backGroundSize: 'cover',
  };
  return (
    <header style={heroBackground}>
      <h1> {props.title} </h1>
      <p> Welcome to my test website </p>
      <a href="#">{props.button}</a>
    </header>
  );
}

export default Hero;
