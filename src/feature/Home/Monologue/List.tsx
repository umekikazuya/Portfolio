import { fetchData } from '@/utils/api'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

interface NodesData {
  data: Array<NodeData>
}

export type NodeData = {
  attributes: {
    created: string | null
    field_body: string | null
    title: string | null
  }
  id: string
}

export default function List(): JSX.Element {
  // Set useState.
  const [nodes, setNodes] = useState<NodesData | null>(null)

  // User's Endpoint.
  const ENDPOINT_MONOLOGUE_LIST = `${
    import.meta.env.VITE_DRUPAL_API
  }/jsonapi/node/monologue`

  // Fetch.
  useEffect(() => {
    fetchData<NodesData>(ENDPOINT_MONOLOGUE_LIST)
      .then((data) => {
        setNodes(data)
      })
      .catch(() => {
        // No script.
      })
  }, [])

  // No render when is loading.
  if (!nodes) return <></>

  return (
    <>
      <StyledList>
        {nodes.data.map((node) => (
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
