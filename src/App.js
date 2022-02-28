import s from "./App.module.scss";
import Toolbar from "./Component/Toolbar";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className={s.root}>
      <Toolbar />
      <div className={s.container}>
        <Sidebar />
        <main className={s.main__content}></main>
      </div>
    </div>
  );
}

export default App;
