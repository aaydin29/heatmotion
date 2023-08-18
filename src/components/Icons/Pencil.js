import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPencil = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      fill="#000"
      d="M15.179.925A2.975 2.975 0 0 0 10.92.87l-9.375 9.375a2.438 2.438 0 0 0-.656 1.194l-.877 3.95a.5.5 0 0 0 .596.597l3.927-.873c.467-.104.895-.34 1.234-.678l9.358-9.358a2.975 2.975 0 0 0 .052-4.153Zm-3.552.653A1.974 1.974 0 1 1 14.42 4.37l-.671.67-2.793-2.791.671-.672Zm-1.378 1.38 2.793 2.792-7.98 7.98a1.518 1.518 0 0 1-.744.409l-3.16.702.708-3.183c.059-.267.193-.511.386-.704l7.997-7.996Z"
    />
  </Svg>
);
export default SvgPencil;
