import {SectionTitle} from '@/components/Parts/Title';
import {FaRegPenToSquare} from 'react-icons/fa6';
import styled from 'styled-components';
import List from './List';
import {useEffect, useState} from 'react';
import {fetchData} from '@/utils/api';

export interface NodesData {
  data: Array<NodeData>;
}

export interface NodeData {
  attributes: {
    created: string | null;
    field_body: string | null;
    title: string | null;
  };
  id: string;
}

export default function Index(): JSX.Element {
  // Set icon for title.
  const TitleIcon = FaRegPenToSquare;

  // Set useState.
  const [nodes, setNodes] = useState<NodesData | null>(null);

  // User's Endpoint.
  const ENDPOINT_MONOLOGUE_LIST = `${
    import.meta.env.VITE_DRUPAL_API
  }/jsonapi/node/monologue?sort[sort-created][path]=created&sort[sort-created][direction]=DESC`;

  // Fetch.
  useEffect(() => {
    fetchData<NodesData>(ENDPOINT_MONOLOGUE_LIST)
      .then((data) => {
        setNodes(data);
      })
      .catch(() => {
        // No script.
      });
  }, []);

  if (!nodes) return <></>;

  return (
    <Section>
      <SectionTitle
        Icon={TitleIcon}
        Text="ひとりごと"
      />
      <List Data={nodes.data} />
    </Section>
  );
}

const Section = styled.section`
  margin-top: 84px;
`;
