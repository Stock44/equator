import * as React from "react";
import { useState } from "react";
import {
  Collapse,
  createTheme,
  Grid,
  Typography,
  Box,
  TextField,
  Grow,
  Stack,
  Container,
  useTheme
} from "@mui/material";
import Layout from "../components/layout";
import EquationCard from "../components/equationCard";

const theme = createTheme({});

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

function IndexPage() {
  // Hooks
  const [searchField, setSearchField] = useState("");
  const theme = useTheme();

  const searchFieldTransition = theme.transitions.create(["margin"]);

  function handleSearchFieldChange(event) {
    setSearchField(event.target.value);
  }

  const isSearchActive = searchField !== "";

  return <Stack>
    <Container sx={{
      mt: isSearchActive ? 4 : "50vh",
      justifyContent: "center",
      transition: searchFieldTransition,
    }}>
      <Collapse in={!isSearchActive}>
        <Typography variant="h1" textAlign="center"
                    gutterBottom color="primary">equator</Typography>
      </Collapse>
      <TextField sx={{
        minWidth: 324,
        width: "80vw",
        maxWidth: "md"
      }} placeholder="Search for an equation"
                 value={searchField} onChange={handleSearchFieldChange}
                 textAlign="center"
                 gutterBottom autoComplete="off" autoFocus />
    </Container>
    <Grid container spacing={2} padding={theme.spacing(4, 2)}>
      {isSearchActive ? test_content.map(
        (content, index) => <Grid item xs={12} s={6} md={6} lg={4}>
          <Grow in={isSearchActive} timeout={750}>
            <EquationCard key={index} title={content.title}
                          category={content.category}
                          latex={content.latex} variant="outlined" />
          </Grow>
        </Grid>) : null}
    </Grid>
  </Stack>;
}

export default IndexPage;
