import s from "./icon.module.scss";
import { Language, Notifications, Settings } from "@mui/icons-material";
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
    default:
      return;
  }
};

export default Icon;
