import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLogout = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 18 18"
    {...props}>
    <Path
      fill="#000"
      d="M9 0a.771.771 0 1 1 0 1.543 7.458 7.458 0 1 0 0 14.914A.771.771 0 0 1 9 18 9 9 0 1 1 9 0Z"
    />
    <Path
      fill="#000"
      d="M13.598 6.46a.77.77 0 0 1 1.09-1.09l3.086 3.085a.772.772 0 0 1 0 1.09l-3.086 3.086a.772.772 0 1 1-1.09-1.09l1.77-1.77H6.942a.771.771 0 0 1 0-1.542h8.424l-1.769-1.77Z"
    />
  </Svg>
);
export default SvgLogout;
