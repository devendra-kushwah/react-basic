import React, { useState } from "react";
import Routes from "./routes/Routes";
import { ContextProvider } from "./Components/Context/Context";

const data = [
  { id: 1, name: "abc" },
  { id: 1, name: "abc" },
];
function App() {
  const contextData = useState(data);
  return (
    <>
      <ContextProvider value={contextData}>
        <Routes />
      </ContextProvider>
    </>
  );
}

export default App;
