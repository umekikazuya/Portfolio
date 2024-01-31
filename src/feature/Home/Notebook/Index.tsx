import {FaCoffee} from 'react-icons/fa';
import {fetchData} from '@/utils/api';
import {SectionTitle} from '@/components/Parts/Title';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import List from './List';

export interface NodesNotebookData {
  data: Array<NodeNoteBookData>;
  included: Array<FileData>;
}

export interface NodeNoteBookData {
  attributes: {
    created: string | null;
    field_body: string | null;
    title: string | null;
  };
  id: string;
  relationships: {
    field_image: {
      data: {
        id: string;
      };
    };
  };
}

interface FileData {
  attributes: {
    filemime: string | null;
    uri: {
      url: string;
    };
  };
  id: string;
}

export default function Index(): JSX.Element {
  // Set icon for title.
  const TitleIcon = FaCoffee;

  // Set useState.
  const [nodes, setNodes] = useState<NodesNotebookData | null>(null);

  // User's Endpoint.
  const ENDPOINT_NOTEBOOK_LIST = `${
    import.meta.env.VITE_DRUPAL_API
  }/jsonapi/node/notebook/?include=field_image&sort[sort-created][path]=created&sort[sort-created][direction]=DESC`;

  // Fetch.
  useEffect(() => {
    fetchData<NodesNotebookData>(ENDPOINT_NOTEBOOK_LIST)
      .then((data) => {
        setNodes(data);
      })
      .catch(() => {
        // No script.
      });
  }, []);

  if (!nodes) return <></>;
  const files: Record<string, string> = {};
  nodes.included.forEach((file: FileData) => {
    files[file.id] = file.attributes.uri.url;
  });

  return (
    <Section>
      <SectionTitle
        Icon={TitleIcon}
        Text="自由帳"
      />
      <List
        Data={nodes.data}
        FileData={files}
      />
    </Section>
  );
}

const Section = styled.section`
  margin-top: 84px;
`;
