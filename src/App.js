import s from "./App.module.scss";
import Toolbar from "./Component/Toolbar";

function App() {
  return (
    <div className={s.root}>
      <Toolbar />
    </div>
  );
}

export default App;
