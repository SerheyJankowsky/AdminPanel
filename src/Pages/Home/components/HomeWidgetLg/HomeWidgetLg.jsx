import { useSelector } from "react-redux";
import { HomeSelectors } from "../../../../redux/home-reducer";
import s from "./homeWidgetLg.module.scss";
import { formatDate } from "../../../../utils/formatDate.js";
const HomeWidgetLg = () => {
  const transaction = useSelector(HomeSelectors.transaction);
  return (
    <div className={s.widget__lg}>
      <h3>Last Transaction</h3>
      <table>
        <tr>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {transaction &&
          transaction.map((transaction) => {
            const { id, name, date, amount, status, img } = transaction;
            return (
              <tr key={id}>
                <td className={s.table__info__name}>
                  <div className={s.img__container}>
                    <img src={img} alt="" />
                  </div>
                  <span>{name}</span>
                </td>
                <td>{formatDate(date)}</td>
                <td>{amount}$</td>
                <td>{status}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default HomeWidgetLg;
