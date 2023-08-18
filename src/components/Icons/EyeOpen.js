import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgEyeOpen = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 14"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 7c-1.889 2.991-5.282 6-9 6S2.889 9.991 1 7c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6Z"
    />
  </Svg>
);
export default SvgEyeOpen;
