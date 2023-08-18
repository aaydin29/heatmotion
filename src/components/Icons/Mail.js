import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMail = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 22 18"
    {...props}>
    <Path
      fill="#000"
      d="M3.25 0h15.5a3.25 3.25 0 0 1 3.245 3.066L22 3.25v11.5a3.25 3.25 0 0 1-3.066 3.245L18.75 18H3.25a3.25 3.25 0 0 1-3.245-3.066L0 14.75V3.25A3.25 3.25 0 0 1 3.066.005L3.25 0ZM20.5 5.905l-9.154 4.76a.749.749 0 0 1-.58.047l-.112-.047L1.5 5.905v8.845a1.75 1.75 0 0 0 1.606 1.744l.144.006h15.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V5.905ZM18.75 1.5H3.25a1.75 1.75 0 0 0-1.744 1.606L1.5 3.25v.964l9.5 4.94 9.5-4.94V3.25a1.75 1.75 0 0 0-1.607-1.744L18.75 1.5Z"
    />
  </Svg>
);
export default SvgMail;
