import React from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import "bulma/css/bulma.min.css";

export const App = () => {
  return (
    <div>
      <Header />
      <CreateArea />
    </div>
  );
};

export default App;
