import * as React from "react";
import {
  Card, CardActionArea, CardContent, Stack, Typography, Chip, Box, Grid
} from "@mui/material";
import "katex/dist/katex.min.css";
import StyledTeX from "./StyledTeX";
import { Link } from "gatsby";
import StyledTextFit from "./StyledTextFit";

/**
 * Component to render a card representing an equation entry.
 * @param {string} name - Name of the equation
 * @param {string[]} tags -
 * @param {string} latex
 * @param {string} excerpt - Excerpt of text to show
 * @param {string} slug
 * @param {React.Ref} ref
 * @return {JSX.Element}
 * @constructor
 */
function EquationCard({
  name,
  tags,
  latex,
  excerpt,
  slug
}, ref) {
  return <Card ref={ref} variant="outlined" sx={{
    height: "100%",
  }}>
    <CardActionArea sx={{height: "100%"}} component={Link} to={`/equations/${slug}`}>
      <CardContent sx={{height: "100%"}}>
        <StyledTextFit mode="single" forceSingleModeWidth={false} sx={{
          height: 100,
          width: (theme) => `calc(100% - ${theme.spacing(4)})`,
          mx: "auto",
          mt: 4,
          mb: 2,
        }}>
          <StyledTeX math={latex} sx={{
            textAlign: "center",
            display: "block"
          }} />
        </StyledTextFit>
        <Typography variant="h2" color="primary"> {name} </Typography>
        <Typography gutterBottom>{excerpt}</Typography>
        <Grid container spacing={1}>
          {tags ? tags.map(
            (tag) => <Grid item>
              <Chip label={tag} size="small" variant="outlined"
                    sx={{ color: "grey.600" }} />
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
    </CardActionArea>;
  </Card>
    ;
}

export default React.forwardRef(EquationCard);
