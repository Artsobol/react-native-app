import * as React from "react"
import Svg, { Mask, Path, SvgProps } from "react-native-svg"

function EqualIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={13}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={-1}
        y={-1}
        width={21}
        height={15}
        fill="#000"
      >
        <Path fill="#fff" d="M-1 -1H20V14H-1z" />
        <Path d="M.398 4.037V.3h18.197v3.736H.398zm0 8.75V9.05h18.197v3.736H.398z" />
      </Mask>
      <Path
        d="M.398 4.037V.3h18.197v3.736H.398zm0 8.75V9.05h18.197v3.736H.398z"
        fill="#C8FF00"
      />
      <Path
        d="M.398 4.037h-1v1h1v-1zM.398.3v-1h-1v1h1zm18.197 0h1v-1h-1v1zm0 3.736v1h1v-1h-1zM.398 12.787h-1v1h1v-1zm0-3.736v-1h-1v1h1zm18.197 0h1v-1h-1v1zm0 3.736v1h1v-1h-1zM1.398 4.037V.3h-2v3.736h2zm-1-2.736h18.197v-2H.398v2zm17.197-1v3.736h2V.3h-2zm1 2.736H.398v2h18.197v-2zm-17.197 9.75V9.05h-2v3.736h2zm-1-2.736h18.197v-2H.398v2zm17.197-1v3.736h2V9.05h-2zm1 2.736H.398v2h18.197v-2z"
        fill="#000"
        mask="url(#a)"
      />
    </Svg>
  )
}

export default EqualIcon
