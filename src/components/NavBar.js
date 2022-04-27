import { NavLink } from 'react-router-dom';

const navbar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="navbar">
      <h1 className="header">Math Magicians</h1>
      <ul className="ul-links">
        {Links.map((link) => (
          <li key={link.id} className="li-links">
            <NavLink
              to={link.path}
              className="links"
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
