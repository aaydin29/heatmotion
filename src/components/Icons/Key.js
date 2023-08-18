import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgKey = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 17 18"
    {...props}>
    <Path
      fill="#000"
      d="M11.191 11.54a5.74 5.74 0 0 1-4.07-1.68 5.77 5.77 0 1 1 4.07 1.68Zm0-10a4.25 4.25 0 1 0 .02 8.5 4.25 4.25 0 0 0-.02-8.5Z"
    />
    <Path
      fill="#000"
      d="M.691 17.04a.75.75 0 0 1-.5-1.25l6.46-6.47a.753.753 0 1 1 1.06 1.07l-6.52 6.4a.74.74 0 0 1-.5.25Z"
    />
    <Path
      fill="#000"
      d="M4.191 17.54a.739.739 0 0 1-.53-.22l-2-2a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1-.53 1.28Zm2-2a.739.739 0 0 1-.53-.22l-2-2a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1-.53 1.28Z"
    />
  </Svg>
);
export default SvgKey;
