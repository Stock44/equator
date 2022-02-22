import * as React from "react";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";


const ScrollLinkBehavior = React.forwardRef((props, ref) => (
  <Link {...props} />
));

/**
 * MUI Link component that implements scrolling behavior
 * from react-scroll library.
 * @param props - Props for the Link component.
 * @returns {JSX.Element}
 * @constructor
 */
const ScrollLink = (props) => <MuiLink
  component={ScrollLinkBehavior} {...props} />;

export default ScrollLink;

