import React from 'react'
import { SVGImage } from './styles'

interface CustomSVGProps {
  width?: string | number
  height?: string | number
  htmlColor?: string | null
  hoverHtmlColor?: string
  fillRule?: 'evenodd' | 'initial' | 'nonzero' | 'revert'
}

const CustomSVG: React.FC<CustomSVGProps> = ({ width, height, children, htmlColor, hoverHtmlColor, fillRule }) => (
  <SVGImage $width={width} $height={height} $htmlColor={htmlColor} $hoverHtmlColor={hoverHtmlColor} $fillRule={fillRule}>
    {children}
  </SVGImage>
)

CustomSVG.defaultProps = {
  width: 58,
  fillRule: 'initial'
}

export default CustomSVG
