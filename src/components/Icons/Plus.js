import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 14 14"
    {...props}>
    <Path
      fill="#fff"
      d="M14 7a.84.84 0 0 1-.84.84H7.84v5.32a.84.84 0 0 1-1.68 0V7.84H.84a.84.84 0 0 1 0-1.68h5.32V.84a.84.84 0 0 1 1.68 0v5.32h5.32A.84.84 0 0 1 14 7Z"
    />
  </Svg>
);
export default SvgPlus;
