import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgProfileFull = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 24"
    {...props}>
    <Path
      fill="#000"
      d="M10 9.6c2.761 0 5-2.149 5-4.8S12.761 0 10 0 5 2.149 5 4.8s2.239 4.8 5 4.8ZM20 18.6c0 2.982 0 5.4-10 5.4S0 21.582 0 18.6s4.478-5.4 10-5.4c5.523 0 10 2.418 10 5.4Z"
    />
  </Svg>
);
export default SvgProfileFull;
