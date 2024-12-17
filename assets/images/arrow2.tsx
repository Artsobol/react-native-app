import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Arrow2Icon(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={47}
      viewBox="0 0 32 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M32 47l-.94-17.295-14.508 9.462L32 47zm-6.118-12.127L3.256.18.744 1.819l22.625 34.693 2.513-1.64z"
        fill="#000"
      />
    </Svg>
  )
}

export default Arrow2Icon
