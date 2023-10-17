// import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./../components/index";
import styles from "./LandingLayout.module.css";

const LandingLayout = () => {
  return (
    <div className={styles.LandingLayout}>
      <div className="col-span-1 row-span-1 ">
        <Header />
      </div>
      <main className="col-span-1 flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default LandingLayout;
