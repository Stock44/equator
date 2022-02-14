import * as React from "react";
import 'core-js/actual/array/at';
import Layout from "../../components/layout";
import {
  Typography,
  Box,
  Stack,
  Paper,
} from "@mui/material";
import TextFit from "@tomplum/react-textfit";
import StyledTeX from "../../components/StyledTeX";
import { graphql } from "gatsby";
import RehypeReact from "rehype-react";
import slugify from "slugify";
import TableOfContents, { Section } from "../../components/TableOfContents";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    p: (props) => <Typography variant="p" {...props} paragraph />,
    h1: (props) => <Typography variant="h2" {...props} />,
    h2: (props) => <Typography variant="h3" {...props} />
  }
}).Compiler;

function addDivSectionsToHtmlAst(htmlAst) {
  let newChildren = [];
  while (htmlAst.children.length) {
    const child = htmlAst.children.shift();

    if (!child.tagName) continue;

    if (child.tagName === "h1") {
      newChildren.push({
        type: "element",
        tagName: "div",
        properties: {
          id: slugify(child.children[0].value)
        },
        children: [child]
      });
    } else if (child.tagName === "h2") {
      newChildren.at(-1).children.push({
        type: "element",
        tagName: "div",
        children: [child],
        properties: {
          id: slugify(child.children[0].value)
        }
      });
    } else if (child.tagName === "p") {
      if (newChildren.length === 0 || newChildren.at(-1).tagName !== "div") {
        newChildren.push(child);
      } else if (newChildren.at(-1).children.at(-1).tagName === "div") {
        newChildren.at(-1).children.at(-1).children.push(child);
      } else {
        newChildren.at(-1).children.push(child);
      }
    }
  }

  htmlAst.children = newChildren;

  return htmlAst;
}

function EquationPage({ data: { markdownRemark } }) {
  const {
    headings,
    htmlAst
  } = markdownRemark;

  const {
    title,
    latex
  } = markdownRemark.frontmatter;

  const sections = Section.sectionArrayFromHeadings(headings);

  const content = renderAst(addDivSectionsToHtmlAst(htmlAst));

  return <Layout>
    <Box sx={{
      mt: 2,
      flexGrow: 1,
      display: "flex"
    }}>
      <Stack sx={{
        maxWidth: "md",
        mx: "auto",
        px: 4
      }}>
        <Paper variant="outlined">
          <TextFit mode="single" max={56}>
            <StyledTeX math={latex} sx={{
              textAlign: "center",
              display: "block",
              my: 6,
              mx: 2
            }} />
          </TextFit>
        </Paper>
        <Typography variant="h1" sx={{ mt: 4 }}>
          {title}
        </Typography>
        {content}
      </Stack>
    </Box>

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
      }
      htmlAst
      headings {
        value
        depth
      }
    }
  }
`;
