import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function XMarkIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.8472 15.4956"
      {...props}
    >
      <Path
        d="M.253 15.243a.896.896 0 001.24 0l6.25-6.25 6.25 6.25c.332.332.908.342 1.24 0a.884.884 0 000-1.23l-6.25-6.26 6.25-6.25a.875.875 0 000-1.23.878.878 0 00-1.24 0l-6.25 6.25-6.25-6.25a.87.87 0 00-1.24 0 .884.884 0 000 1.23l6.25 6.25-6.25 6.26a.875.875 0 000 1.23z"
        fill="#FF0000"
        fillOpacity={0.85}
      />
    </Svg>
  )
}

export default XMarkIcon