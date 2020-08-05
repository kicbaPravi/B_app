import React from "react";
import "./sass/_base.module.scss";
import Title from "./components/Title";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Sort from "./components/Sort";
// import Footer from "./components/Footer";
import style from "./sass/_components.module.scss";
import { StateProvider } from "./Context";

function App() {
  return (
    <StateProvider>
      <Header></Header>
      <div className={style.container}>
        <Title name="Movies"></Title>
        <Sort></Sort>
        <Grid></Grid>
      </div>
      {/* <Footer></Footer> */}
    </StateProvider>
  );
}

export default App;
