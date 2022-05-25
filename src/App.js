import { useEffect, useState } from "react";
import Backtotop from "./components/backtotop/Backtotop";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HowIt from "./components/howitwork/HowIt";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    // console.log("first");
    menu === false ? setMenu(true) : setMenu(false);
    // console.log(menu);
  };
  return (
    <div className="App">
      <Navbar brand="Brand." handleMenu={handleMenu} />
      <Menu menu={menu} />
      <Header />
      <HowIt />

      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;
