import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function CarrotIcon(props : SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.8424 22.782"
      {...props}
    >
      <Path
        d="M15.977 6.25C17.52 5.262 19.102.82 17.364.39c-1.788-.41-2.344 4.287-1.387 5.86zm.234.38c2.266.01 6.895-3.691 5.293-5.303-1.601-1.601-5.303 3.028-5.293 5.303zm.381.225c1.563.976 6.27.4 5.86-1.358-.42-1.767-4.874-.175-5.86 1.358zM.567 22.225c.498.509 1.26.831 2.207.235l4.902-3.066-1.172-1.162a.628.628 0 01-.01-.908.628.628 0 01.909 0l1.386 1.367 1.094-.694-1.64-1.582a.637.637 0 01-.01-.908c.263-.254.654-.264.908-.01l1.855 1.817 4.766-3.008c3.33-2.09 3.926-5.352 1.436-7.88l-.84-.85c-2.168-2.198-4.961-2.002-7.022.322l2.598 2.558a.625.625 0 01.02.899.62.62 0 01-.909.01l-2.5-2.442-.683 1.074 1.865 1.827c.264.263.264.664.01.908-.264.254-.645.264-.909 0L7.168 9.12.313 19.99c-.547.879-.322 1.66.254 2.236z"
        fill="#282828"
        fillOpacity={0.85}
      />
    </Svg>
  )
}

export default CarrotIcon
