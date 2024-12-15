import { Colors } from "@/shared/tokens"
import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function СhevronIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.6895 16.9629"
      {...props}
    >
      <Path
        d="M11.69 8.477a.874.874 0 00-.284-.645L3.672.254A.908.908 0 003.027 0a.874.874 0 00-.888.889c0 .244.097.468.254.634l7.109 6.954-7.11 6.953a.91.91 0 00-.253.634c0 .508.39.89.888.89a.877.877 0 00.645-.265l7.734-7.568a.89.89 0 00.284-.644z"
        fill="#696969"
        fillOpacity={0.85}
      />
    </Svg>
  )
}

export default СhevronIcon

