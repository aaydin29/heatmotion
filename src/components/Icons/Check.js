import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCheck = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    viewBox="0 0 10 8"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1 3.667 7 1 4"
    />
  </Svg>
);
export default SvgCheck;
