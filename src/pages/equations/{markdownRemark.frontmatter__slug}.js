import * as React from "react";
import "core-js/actual/array/at";
import Layout from "../../components/layout";
import {
  Typography,
  Box,
  Stack,
  Paper,
  ListItem,
  List, Chip,
  Grid
} from "@mui/material";
import TextFit from "@tomplum/react-textfit";
import StyledTextFit from "../../components/StyledTextFit";
import StyledTeX from "../../components/StyledTeX";
import { graphql } from "gatsby";
import RehypeReact from "rehype-react";
import slugify from "slugify";
import TableOfContents, { Section } from "../../components/TableOfContents";

/**
 * This object compiles an HTML syntax tree into React
 * components, replacing the specified tags with the
 * given components.
 */
const renderAst = new RehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    p: (props) => <Typography variant="p" {...props} />,
    h1: (props) => <Typography variant="h2" {...props} />,
    h2: (props) => <Typography variant="h3" {...props} />,
    ul: (props) => <List {...props} />,
    li: (props) => <ListItem {...props} />,
    div: (props) => <Stack sx={{ my: 1 }} {...props} />
  }
}).Compiler;

/**
 * This function groups all sections inside an HTML AST into
 * divs. A section is defined as a header (either h1 or h2)
 * followed by any other content. A top level section may contain
 * subsections within.
 * @param {Object} htmlAst - The HTML AST.
 * @return {Object} - The generated HTML AST.
 */
function addDivSectionsToHtmlAst(htmlAst) {
  function SectionDivNode(headerNode) {
    this.type = "element";
    this.tagName = "div";
    this.properties = {
      id: slugify(headerNode.children[0].value)
    };
    this.children = [headerNode];
  }

  // Leave top level object as is, iterate over children.
  let sectionedAst = [];
  while (htmlAst.children.length) {
    const child = htmlAst.children.shift();
    // If not an HTML tag continue
    if (!child.tagName) continue;
    // Create new section if h1 or h2
    // Else insert current tag into the children
    // of the previous section
    if (child.tagName === "h1") {
      sectionedAst.push(new SectionDivNode(child));
    } else if (child.tagName === "h2") {
      sectionedAst.at(-1).children.push(new SectionDivNode(child));
    } else {
      if (sectionedAst.length === 0 || sectionedAst.at(-1).tagName !== "div") {
        sectionedAst.push(child);
      } else if (sectionedAst.at(-1).children.at(-1).tagName === "div") {
        sectionedAst.at(-1).children.at(-1).children.push(child);
      } else {
        sectionedAst.at(-1).children.push(child);
      }
    }
  }

  htmlAst.children = sectionedAst;

  return htmlAst;
}

function EquationPage({ data: { markdownRemark } }) {
  const {
    headings,
    htmlAst
  } = markdownRemark;

  const {
    title,
    latex,
    tags
  } = markdownRemark.frontmatter;

  const sections = Section.sectionArrayFromHeadings(headings);

  const content = renderAst(addDivSectionsToHtmlAst(htmlAst));

  return <Layout>
    <Stack sx={{
      maxWidth: "md",
      width: "100%",
      mx: "auto",
      px: 4
    }}>
      <Paper variant="outlined" sx={{
        my: 4,
        width: "100%",
      }}>
        <StyledTextFit mode="single" max={56} sx={{
          my: 4,
          mx: 2,
        }}>
          <StyledTeX math={latex} sx={{
            display: "flex",
            justifyContent: "center",
          }}/>
        </StyledTextFit>
      </Paper>
      <Typography variant="h1">
        {title}
      </Typography>
      <Grid container spacing={1} sx={{
        my: 2
      }}>
        {
          tags.map(
            (tag) => <Grid item key={tag} xs="auto">
              <Chip label={tag} size="small" variant="outlined" />
            </Grid>)
        }
      </Grid>
      {content}
    </Stack>

    <TableOfContents sections={sections} sx={{
      alignSelf: "flex-start",
      position: "sticky",
      boxSizing: "border-box",
      top: (theme) => theme.spacing(2),
      width: 240,
      flexShrink: 0,
      pr: 4,
      mt: 4,
      display: {
        xs: "none",
        lg: "flex"
      }
    }} />
  </Layout>;
}

export default EquationPage;

export const query = graphql`
  query EquationBySlug($frontmatter__slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $frontmatter__slug}}) {
      frontmatter {
        title
        latex
        tags
      }
      htmlAst
      headings {
        value
        depth
      }
    }
  }
`;
