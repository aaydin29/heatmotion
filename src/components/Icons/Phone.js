import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPhone = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      fill="#000"
      d="m15.314 10.963-3.857-1.728a1.143 1.143 0 0 0-1.13.134l-2.015 1.714a.153.153 0 0 1-.137.005c-1.296-.625-2.638-1.96-3.265-3.237a.156.156 0 0 1 0-.137l1.72-2.04a1.143 1.143 0 0 0 .126-1.13L5.038.69A1.143 1.143 0 0 0 3.851.008 4.428 4.428 0 0 0 0 4.408C0 10.8 5.2 16 11.592 16a4.428 4.428 0 0 0 4.4-3.85 1.143 1.143 0 0 0-.678-1.187Zm-3.722 4.057C5.741 15.02.98 10.26.98 4.408A3.447 3.447 0 0 1 3.973.979h.019a.163.163 0 0 1 .15.107l1.723 3.846a.163.163 0 0 1 0 .136L4.14 7.114a1.143 1.143 0 0 0-.11 1.167c.725 1.483 2.219 2.965 3.718 3.69a1.142 1.142 0 0 0 1.17-.117l2.014-1.714a.157.157 0 0 1 .131-.008l3.857 1.728a.165.165 0 0 1 .1.164 3.448 3.448 0 0 1-3.429 2.996Z"
    />
  </Svg>
);
export default SvgPhone;