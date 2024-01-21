import { useState } from 'react'
import styled from 'styled-components'

interface ListItemProps {
  Text: string | null
  FileSrc: string | null
}

interface FilterProps {
  isHovered: boolean
}

export default function ListItem({
  Text,
  FileSrc,
}: ListItemProps): JSX.Element {
  // Set useState.
  const [isHover, setIsHover] = useState<boolean>(false)
  const srcPath = `${import.meta.env.VITE_DRUPAL_API}/${FileSrc}`

  return (
    <StyledListItem
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={srcPath} alt="" />
      <Filter isHovered={isHover}>{Text}</Filter>
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  position: relative;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  @media (min-width: 576px) {
    max-width: initial;
  }
  &:first-of-type {
    margin-top: 0;
  }
`
const Filter = styled.div<FilterProps>`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`
