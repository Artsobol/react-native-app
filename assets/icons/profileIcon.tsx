import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function ProfileIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.7969 17.5684"
      {...props}
    >
      <Path
        d="M1.67 17.559h13.096c1.044 0 1.67-.489 1.67-1.3 0-2.519-3.155-5.995-8.223-5.995C3.154 10.264 0 13.74 0 16.26c0 .81.625 1.299 1.67 1.299zm6.553-9.043c2.09 0 3.906-1.875 3.906-4.317C12.129 1.787 10.313 0 8.223 0S4.316 1.826 4.316 4.219c0 2.422 1.807 4.297 3.907 4.297z"
        fill="#000000"
        fillOpacity={0.85}
      />
    </Svg>
  )
}

export default ProfileIcon
