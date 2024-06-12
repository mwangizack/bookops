import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
