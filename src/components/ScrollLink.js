import * as React from "react";
import { styled, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";

const AdapterLink = React.forwardRef(
  (props, ref) => <Link innerRef={ref} {...props} />);

const ScrollLink = (props) => <MuiLink component={AdapterLink} {...props} />;

export default ScrollLink;
