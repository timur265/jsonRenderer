import classes from "./Layout.module.css";
import cn from "clsx";
import React from "react";
import { routes } from "src/config/routes";
import Typography from "../ui-kit/Typography";
import { Container } from "@material-ui/core";

const Layout = (props: { children: JSX.Element; setProducts?: Function }) => {
  if (props.setProducts) {
    props.setProducts(1);
  }
  return (
    <>
      <nav className={cn(classes.navContainer)}>
        <ul className={cn(classes.navMenu)}>
          <Typography variant="li" color="white">
            <a href={routes.uploadPage}>Uploader</a>
          </Typography>
          <Typography variant="li" color="white">
            <a href={routes.rendererPage}>Renderer</a>
          </Typography>
        </ul>
      </nav>
      <main>
        <Container fixed>{props.children}</Container>
      </main>
    </>
  );
};

export default Layout;
