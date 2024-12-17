import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Arrow1Icon(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={47}
      viewBox="0 0 36 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 47l15.88-6.915L1.951 29.79 0 47zm9.23-9.965L35.207 1.892 32.794.108 6.818 35.252l2.413 1.783z"
        fill="#000"
      />
    </Svg>
  )
}

export default Arrow1Icon
