import s from "./chart.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const Chart = ({ data, title, grid, dataKey }) => {
  return (
    <div className={s.chart}>
      <h3 className={s.chart__title}>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#c2d5ee" />
          <Line type="monotone" dataKey={dataKey} stroke="#c2d5ee" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#c2d5ee" strokeDasharray={"5 5"} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  grid: PropTypes.bool,
  dataKey: PropTypes.string.isRequired,
};
Chart.defaultProps = {
  grid: true,
};

export default Chart;
