import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgEyeClose = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 18 12"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.667 9-2.2-3.396M9 10.5V7M2.333 9l2.195-3.388M1 1c3.2 8 12.8 8 16 0"
    />
  </Svg>
);
export default SvgEyeClose;
