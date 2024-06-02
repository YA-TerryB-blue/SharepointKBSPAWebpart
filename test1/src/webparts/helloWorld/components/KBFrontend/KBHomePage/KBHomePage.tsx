import * as React from "react";
import NavBar from "./NavBar";
import { Title1, makeStyles, shorthands } from "@fluentui/react-components";
import KBCardQuickView from "./KBCardQuickView";

const useStyles = makeStyles({
  Title: {
    display: "block",
    textAlign: "center",
    ...shorthands.margin("0.25rem"),
  },
  Container: {
    display: "flex",
    flexWrap: "wrap",
  },
  Card: {
    ...shorthands.flex("50%"),
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
  },
});

const KBHomePage = () => {
  const styles = useStyles();
  return (
    <>
      <Title1 className={styles.Title}>Welcome to the IT Knowledge Base</Title1>
      <NavBar />
      <div className={styles.Container}>
        <div className={styles.Card}>
          <KBCardQuickView />
        </div>
        <div className={styles.Card}>
          <KBCardQuickView />{" "}
        </div>
        <div className={styles.Card}>
          <KBCardQuickView />
        </div>
        <div className={styles.Card}>
          <KBCardQuickView />
        </div>
      </div>
    </>
  );
};

export default KBHomePage;
