import * as React from "react";
import SearchBar from "../SearchBar";
import "./NavBarStyles.module.scss";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  Text: {
    color: "white",
  },
});

const NavBar = () => {
  const styles = useStyles();
  return (
    <nav>
      <ul>
        <li>
          <a href="#Home">
            {" "}
            <Text className={styles.Text}>Home</Text>{" "}
          </a>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          {" "}
          <a href="#AllKBS">
            {" "}
            <Text className={styles.Text}>All KBs</Text>
          </a>
        </li>
        <li>
          {" "}
          <a href="#CreateAKB">
            {" "}
            <Text className={styles.Text}>Create a KB</Text>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
