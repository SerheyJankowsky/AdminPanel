import Icon from "../Icons";
import s from "./toolbar.module.scss";

const Toolbar = () => {
  return (
    <div className={s.toolbar__wrapper}>
      <div className={s.toolbar__left}>
        <span className={s.logo}>Admin-Panel</span>
      </div>
      <div className={s.toolbar__right}>
        <Icon type="Notification" />
        <Icon type="Language" />
        <Icon type="Settings" />
        <div className={s.toolbar__avatar}>
          <img
            src="https://www.pngfind.com/pngs/m/406-4068951_simplyyyyyy-avatar-maker-hd-png-download.png"
            alt="its steal"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
