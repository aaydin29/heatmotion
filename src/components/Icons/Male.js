import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMale = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 18 18"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.233 6.747a6 6 0 1 0-8.466 8.507 6 6 0 0 0 8.466-8.507Zm0 0L17 1m0 0h-4m4 0v4"
    />
  </Svg>
);
export default SvgMale;
