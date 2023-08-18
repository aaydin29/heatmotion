import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFemale = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 14 20"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 0v4m0 0v2m0-2H5m2 0h2"
    />
  </Svg>
);
export default SvgFemale;
