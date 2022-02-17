import * as React from "react";
import { useEffect, useRef, useState } from "react";
import queryString from "query-string";
import {
  Collapse, Grid, Typography, Box, TextField, Grow, Stack, useTheme
} from "@mui/material";
import EquationCard from "../components/equationCard";

// Temporary import to test links
import { graphql } from "gatsby";

function IndexPage({
  navigate,
  location: { hash },
  data: { allMarkdownRemark: { nodes } }
}, ...rest) {

  //region Hooks
  // Use current location's hash as initial search field contents, if present.
  const [searchField, setSearchField] = useState(
    queryString.parse(hash).search ?? "");
  const theme = useTheme();
  // Add listener for URL hash to detect if search field changes.
  useEffect(() => {
    const handleHashChange = (event) => {
      const { search } = queryString.parse(event.target.location.hash);

      setSearchField(search ?? "")
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  //endregion

  //region Handlers
  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Add hash search field only if it's not an empty string.
      let path = !!searchField ? `#${queryString.stringify({
        search: searchField
      })}` : "";
      navigate(path);
    }
  };
  //endregion

  //region Constants
  const currentSearch = queryString.parse(hash).search ?? "";
  const isSearchActive = !!currentSearch
  const searchFieldTransition = theme.transitions.create(["margin"]);
  //endregion

  return <Stack sx={{
    height: "100%",
    alignItems: "center",
    mt: isSearchActive ? 4 : "35vh",
    transition: searchFieldTransition
  }}>
    <Box sx={{
      px: 2,
      maxWidth: "sm",
      width: "100%",
      justifyContent: "center"
    }}>
      <Collapse in={!isSearchActive}>
        <Typography variant="h1" textAlign="center"
                    gutterBottom color="primary">equator</Typography>
      </Collapse>
      <TextField sx={{
        width: "100%",
        boxSizing: "border-box"
      }} placeholder="Search for an equation"
                 onKeyPress={handleKeyPress}
                 value={searchField} onChange={handleSearchFieldChange}
                 textAlign="center"
                 gutterBottom autoComplete="off" autoFocus />
    </Box>
    <Grid container spacing={2} padding={theme.spacing(4, 2)}>
      {isSearchActive ? nodes.map((document, index) => {
        const { frontmatter } = document;
        return <Grid item xs={12} s={6} md={6} lg={4}>
          <Grow in={isSearchActive} timeout={750}>
            <EquationCard key={index} title={frontmatter.title}
                          category="what" slug={frontmatter.slugra}
                          latex={frontmatter.latex} variant="outlined" />
          </Grow>
        </Grid>;
      }) : null}
    </Grid>
  </Stack>;
}

export default IndexPage;

// Query for frontmatter of all pages, temporarily while in testing.
// TODO implement algolia to replace the static query.
export const query = graphql`
  query PageListQuery{
	  allMarkdownRemark{
      nodes {
        frontmatter{
				  slug,
          title,
          latex
        }
      }
    }
  }

`;
