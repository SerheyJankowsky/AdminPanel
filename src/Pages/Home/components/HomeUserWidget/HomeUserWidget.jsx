import s from "./homeUserWidget.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { HomeActions } from "../../../../redux/home-reducer";

const concatName = (firstName, lastName) => `${firstName} ${lastName}`;

const HomeUserWidget = ({ data }) => {
  const dispatch = useDispatch();

  const setTransactions = (transactions) => {
    dispatch(HomeActions.setSelectedTransactions(transactions));
  };

  return (
    <div className={s.widget__body}>
      <h3>New user join</h3>
      <ul className={s.user__list}>
        {data?.map((user) => {
          const { id, firstName, secondName, position, img, transaction } =
            user;
          return (
            <li className={s.list__item} key={id}>
              <div className={s.list__avatar}>
                <img src={img} alt="" />
              </div>
              <div className={s.user__info}>
                <span>{concatName(firstName, secondName)}</span>
                <span>{position}</span>
              </div>
              <button
                className={s.btn__show}
                onClick={() => {
                  setTransactions(transaction);
                }}>
                Show
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

HomeUserWidget.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HomeUserWidget;
