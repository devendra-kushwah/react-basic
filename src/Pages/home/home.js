import React from "react";

import Header from "../../header";
import { useSelect } from "../../Components";

const option = ["Manager", "developer", "designer", "etc.."];

const Home = () => {
  const [name, SetName] = useSelect("Role", "", option);
  return (
    <div>
      <Header />
      <br />
      <h2> Home page</h2>
      <br />
      <h3>Cusatom hooks</h3>
      <br />
      <SetName />
    </div>
  );
};

export default Home;
