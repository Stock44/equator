import * as React from "react";
import Layout from "../../components/layout";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Box,
  Stack,
  List,
  ListItem,
  Container,
  Link,
  Drawer
} from "@mui/material";
import { Link as GatsbyLink } from "gatsby";
import ScrollLink from "../../components/ScrollLink";
import TextFit from "@tomplum/react-textfit";
import StyledTeX from "../../components/StyledTeX";
import { active } from "./equation.module.css";
import { graphql } from "gatsby";
import RehypeReact from "rehype-react";

const renderAst = new RehypeReact({
  createElement: React.createElement
}).Compiler;

function EquationPage({ data }) {
  const {
    title,
    latex
  } = data.markdownRemark.frontmatter;

  const content = renderAst(data.markdownRemark.htmlAst);

  let sections = [];

  return <Layout>
    <AppBar elevation={0} position="static" maxWidth="lg" color="primary">
      <Toolbar sx={{ my: 2 }}>
        <Container sx={{
          maxWidth: "lg",
          mx: "auto",
          display: "flex"
        }}>
          <Link component={GatsbyLink} to={"/"} variant="h4"
                color="primary"
                sx={{
                  textDecoration: "none",
                  flexGrow: 1,
                  mr: 2
                }}>equator</Link>
          <TextField fullWidth sx={{ maxWidth: "sm" }} />
        </Container>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent">
      hello
    </Drawer>
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Stack>
        <Container>
          <TextFit mode="single" max={48}>
            <StyledTeX math={latex} sx={{
              textAlign: "center",
              display: "block",
              my: 6
            }} />
          </TextFit>
        </Container>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={10}>
            <Stack>
              {content}
            </Stack>
          </Grid>
          <Grid item lg={2} sx={{
            display: {
              md: "block",
              xs: "none"
            }
          }}>
            <Stack sx={{
              mt: 2,
              position: "sticky",
              top: 100
            }}>
              <Typography sx={{
                color: "#808080"
              }} gutterBottom>Contents</Typography>
              <List>
                {
                  ["hello", "oxschool", "goodbye", "winter", "(s)pain"].map(
                    (text) => <ListItem sx={{
                      p: 0,
                      mt: 2
                    }}>
                      <ScrollLink to={text} offset={-72} smooth spy={true}
                                  activeClass={active} sx={{
                        color: "#808080",
                        textDecoration: "none"
                      }}>
                        {text}
                      </ScrollLink>
                    </ListItem>)
                }
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Layout>;
}

export default EquationPage;

export const query = graphql`{
  markdownRemark{
		frontmatter{
			title
			latex
    }
    htmlAst
  }
}
`;
