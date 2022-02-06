import * as React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import "katex/dist/katex.min.css";
import StyledTeX from "./StyledTeX";
import { Link } from "gatsby";

function EquationCard({
  title,
  category,
  latex,
  ...props
}, ref) {
  return <Card sx={{ minWidth: 300 }} ref={ref} {...props}>
    <CardActionArea component={Link} to="/equation">
        <CardContent>
          <Typography color="grey.600"
                      variant="subtitle1">{category}</Typography>
          <StyledTeX math={latex} sx={{
            fontSize: "1.5em",
            textAlign: "left",
            display: "block",
            my: 2
          }} />
          <Typography variant="h5" color="primary"> {title} </Typography>
        </CardContent>
    </CardActionArea>
  </Card>;
}

export default React.forwardRef(EquationCard);
