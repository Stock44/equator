import * as React from "react";
import { useState } from "react";
import queryString from "query-string";
import {
  Collapse,
  Grid,
  Typography,
  Box,
  TextField,
  Grow,
  Stack,
  useTheme
} from "@mui/material";
import EquationCard from "../components/equationCard";

// Temporary import to test links
import { graphql } from "gatsby";

const test_content = [
  {
    title: "Sigmoid Function",
    category: "Mathematical Functions",
    latex: "S(x)=\\frac{1}{1+e^{-x}}"
  }, {
    title: "Law of Universal Gravitation",
    category: "Classical Mechanics",
    latex: "F=G\\frac{m_1m_2}{r^2}"
  }, {
    title: "Newton's Second Law of Motion",
    category: "Classical Mechanics",
    latex: "\\bm{F}_{net} = m\\bm{a}"
  }, {
    title: "Dot product",
    category: "Algebra",
    latex: "\\bm{a}\\cdot\\bm{b}=\\sum^n_{i=1}a_ib_i"
  }];

function IndexPage({
  navigate,
  location: { hash },
  data: { allMarkdownRemark: { nodes } }
}) {
  // Hooks
  // Use current location's hash as initial search field contents, if present.
  const [searchField, setSearchField] = useState(
    queryString.parse(hash).search ?? "");
  // If entered page with an initial search, set search active immediately.
  const [isSearchActive, setSearchActive] = useState(!!searchField);
  const theme = useTheme();

  const searchFieldTransition = theme.transitions.create(["margin"]);

  // Handler functions
  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchActive(true);
      const query = queryString.stringify({
        search: searchField
      });
      navigate(`/#${query}`);
      event.preventDefault();
    }
  };

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
      {isSearchActive ? nodes.map(
        (document, index) => {
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
