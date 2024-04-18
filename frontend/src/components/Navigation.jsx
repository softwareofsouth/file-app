import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/upload">Upload</NavLink>
        </li>
        <li>
          <NavLink to="/files">Files</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;