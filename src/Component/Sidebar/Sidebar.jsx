import s from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { pathLink } from "./pathLink.js";
const Sidebar = () => {
  return (
    <ul className={s.link__wraper}>
      <h2>Dashboard</h2>
      {pathLink.map(({ to, name, icons }) => (
        <li>
          {" "}
          <NavLink
            to={to}
            className={(link) => (link.isActive ? s.active : s.link)}>
            {icons}
            <p>{name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
