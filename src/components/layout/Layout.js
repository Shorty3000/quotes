import { Fragment } from "react";
import css from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={css.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
