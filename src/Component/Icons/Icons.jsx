import s from "./icon.module.scss";
import PropTypes from "prop-types";
import {
  Language,
  Notifications,
  Settings,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";
const Icon = ({ type }) => {
  switch (type) {
    case "Notification":
      return (
        <div className={s.icon__notifications}>
          <Notifications sx={{ fontSize: 35, color: "#ffff" }} />
          <div className={s.counter__notifications}>
            <span>2</span>
          </div>
        </div>
      );
    case "Language":
      return (
        <div className={s.icon__language}>
          <Language sx={{ fontSize: 35, color: "#ffff" }} />
        </div>
      );
    case "Settings":
      return (
        <div className={s.icon__language}>
          <Settings sx={{ fontSize: 35, color: "#ffff" }} />
        </div>
      );
    case "ArrowUp":
      return (
        <div className={s.icon__language}>
          <ArrowUpward sx={{ fontSize: 15, color: "#96dbae" }} />
        </div>
      );
    case "ArrowDown":
      return (
        <div className={s.icon__language}>
          <ArrowDownward sx={{ fontSize: 15, color: "#fc7174" }} />
        </div>
      );
    default:
      return "NotFound";
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
