import React, { useState, useContext } from "react";

import Header from "../../header";
import { useSelect } from "../../Components";

import { ContextProvider, MyContext } from "../../Components/Context/Context";

const option = ["Manager", "developer", "designer", "etc.."];

const Home = () => {
  const userContext = useContext(MyContext);
  const [state, setstate] = useState();

  const [name, SetName] = useSelect("Role", "", option);

  console.log(userContext);
  return (
    <ContextProvider value={option}>
      <Header />
      <br />
      <h2> Home page</h2>
      <br />
      <h3>Cusatom hooks</h3>
      <br />
      <SetName />
    </ContextProvider>
  );
};

export default Home;
