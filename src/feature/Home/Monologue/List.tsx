import styled from 'styled-components'
import ListItem from './ListItem'
import { NodeData } from './Index'

interface ListProps {
  Data: Array<NodeData>
}

export default function List({ Data }: ListProps): JSX.Element {
  return (
    <>
      <StyledList>
        {Data.map((node) => (
          <ListItem key={node.id} data={node} />
        ))}
      </StyledList>
      <MoreLink>
        <a href="#">View More...</a>
      </MoreLink>
    </>
  )
}

const StyledList = styled.ul`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
`

const MoreLink = styled.div`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  text-align: right;
  font-size: 12px;
  &:hover,
  &:focus {
    color: #2e444eb9;
  }
`
