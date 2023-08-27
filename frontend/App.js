import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import geceModuAc from "./components/hooks/geceModuAc";
import localStorageKullan from "./components/hooks/localStorageKullan";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, toggleGeceMode] = geceModuAc(false);
  const [login, setLogin, logOut] = localStorageKullan(false, "loggedInUser");
  /*  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []); */
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={toggleGeceMode} />

      {login?.uname}
      {""}

      <button
        onClick={() => {
          setLogin({
            uname: "emracatal",
            mail: "emracatal@gmail.com",
          });
        }}
      >
        Login
      </button>

      <button onClick={logOut}>Logout</button>
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
