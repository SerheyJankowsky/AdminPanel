import s from "./homeUserWidget.module.scss";
import PropTypes from "prop-types";

const concatName = (firstName, lastName) => `${firstName} ${lastName}`;

const HomeUserWidget = ({ data }) => {
  return (
    <div className={s.widget__body}>
      <span className={s.widget__title}>New user join</span>
      <ul className={s.user__list}>
        {data?.map((user) => {
          const { id, firstName, secondName, position, img } = user;
          return (
            <li className={s.list__item} key={id}>
              <img src={img} alt="" />
              <div className={s.user__info}>
                <span>{concatName(firstName, secondName)}</span>
                <span>{position}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

HomeUserWidget.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomeUserWidget;
