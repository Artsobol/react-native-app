import * as React from "react"
import Svg, { Mask, Path, SvgProps } from "react-native-svg"

function PlusIcon(props: SvgProps) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={-1}
        y={-1}
        width={23}
        height={23}
        fill="#000"
      >
        <Path fill="#fff" d="M-1 -1H22V22H-1z" />
        <Path d="M8.586 20.153V.95h3.821v19.204H8.586zM.9 12.455V8.633h19.205v3.82H.9z" />
      </Mask>
      <Path
        d="M8.586 20.153V.95h3.821v19.204H8.586zM.9 12.455V8.633h19.205v3.82H.9z"
        fill="#C8FF00"
        fillOpacity={0.4}
      />
      <Path
        d="M8.586 20.153h-1v1h1v-1zm0-19.204v-1h-1v1h1zm3.821 0h1v-1h-1v1zm0 19.204v1h1v-1h-1zM.901 12.455h-1v1h1v-1zm0-3.821v-1h-1v1h1zm19.205 0h1v-1h-1v1zm0 3.82v1h1v-1h-1zm-10.52 7.7V.948h-2v19.204h2zm-1-18.205h3.821v-2H8.586v2zm2.821-1v19.204h2V.95h-2zm1 18.204H8.586v2h3.821v-2zM1.901 12.455V8.633h-2v3.82h2zm-1-2.821h19.205v-2H.9v2zm18.205-1v3.82h2v-3.82h-2zm1 2.82H.9v2h19.205v-2z"
        fill="#000"
        mask="url(#a)"
      />
    </Svg>
  )
}

export default PlusIcon
