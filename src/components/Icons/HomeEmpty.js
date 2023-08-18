import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHomeEmpty = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 22 26"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m5.892 10.6 3.473-8.408c.655-1.59 2.615-1.59 3.27 0l8.182 19.812c.74 1.794-.905 3.656-2.447 2.767l-6.56-3.783a1.598 1.598 0 0 0-1.62 0l-6.56 3.783c-1.542.888-3.189-.972-2.446-2.767L3.538 16.3"
    />
  </Svg>
);
export default SvgHomeEmpty;
