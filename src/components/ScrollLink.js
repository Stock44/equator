import * as React from 'react';
import {Link} from "react-scroll";

const ScrollLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

export default ScrollLink
