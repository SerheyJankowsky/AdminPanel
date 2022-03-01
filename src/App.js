import s from "./App.module.scss";
import Toolbar from "./Component/Toolbar";
import Sidebar from "./Component/Sidebar";
import NavigationRoutes from "./Routes";

function App() {
  return (
    <div className={s.root}>
      <Toolbar />
      <div className={s.container}>
        <Sidebar />
        <main className={s.main__content}>
          <NavigationRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
