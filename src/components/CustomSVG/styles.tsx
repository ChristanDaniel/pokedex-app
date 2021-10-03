import styled from 'styled-components'

interface SVGImageProps {
  $width?: string | number
  $height?: string | number
  $htmlColor?: string | null
  $hoverHtmlColor?: string
  $fillRule?: 'evenodd' | 'initial' | 'nonzero' | 'revert'
}

const SVGImage = styled.div<SVGImageProps>`
  svg {
    display: block;
    width: ${(props) => `${props.$width}px`};
    height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};

    path {
      fill: ${(props) => (props.$htmlColor ? props.$htmlColor : null)};
      fill-opacity: 1;
      fill-rule: ${(props) => props.$fillRule};
    }
  }

  :hover svg {
    path {
      fill: ${(props) => (props.$hoverHtmlColor ? props.$hoverHtmlColor : null)};
    }
  }
`

export { SVGImage }
