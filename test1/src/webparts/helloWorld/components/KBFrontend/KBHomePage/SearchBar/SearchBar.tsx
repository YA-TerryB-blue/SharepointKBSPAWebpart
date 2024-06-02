import { shorthands, makeStyles, SearchBox } from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  SearchBox: {
    ...shorthands.borderRadius("10px"),
    ...shorthands.margin("0.55em"),
    width: "8em",
  },
});

const SearchBar = () => {
  const styles = useStyles();
  return (
    <>
      <SearchBox className={styles.SearchBox} placeholder="Find a KB" />
    </>
  );
};

export default SearchBar;
