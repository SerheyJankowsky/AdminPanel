import s from "./toolbar.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Toolbar = () => {
  return (
    <div className={s.toolbar__wrapper}>
      <div className={s.toolbar__left}>
        <span className={s.logo}>Admin-Panel</span>
      </div>
      <div className={s.toolbar__right}>
        <div className={s.icon__block}>
          <NotificationsIcon sx={{ fontSize: 35, color: "#ffff" }} />
          <div className={s.counter__notifications}>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
