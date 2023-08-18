import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgUsername = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 20"
    {...props}>
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 8.2c1.933 0 3.5-1.612 3.5-3.6S9.933 1 8 1 4.5 2.612 4.5 4.6 6.067 8.2 8 8.2ZM15 14.95C15 17.186 15 19 8 19s-7-1.814-7-4.05c0-2.236 3.134-4.05 7-4.05s7 1.813 7 4.05Z"
    />
  </Svg>
);
export default SvgUsername;
