import './Nav.css';

function Nav(props) {
  //   console.log(props.LogoTitle);
  const sections = ['Home', 'About', 'Services', 'Portfolio', 'Footer'];
  const navigations = sections.map((nav, index) => {
    return (
      <li key={index}>
        {' '}
        <a href={`#${nav}`}>{nav}</a>
      </li>
    );
  });
  return (
    <nav>
      <h2 className="project">{props.LogoTitle}</h2>
      <ul>{navigations}</ul>
    </nav>
  );
}

export default Nav;
