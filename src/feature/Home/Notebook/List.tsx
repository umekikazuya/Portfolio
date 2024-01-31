import styled from 'styled-components';
import ListItem from './ListItem';
import {NodeNoteBookData} from './Index';

interface ListProps {
  Data: Array<NodeNoteBookData>;
  FileData: Record<string, string>;
}

export default function List({Data, FileData}: ListProps): JSX.Element {
  return (
    <>
      <StyledList>
        {Data.map((node) => (
          <ListItem
            key={node.id}
            Text={node.attributes.title}
            FileSrc={FileData[node.relationships.field_image.data.id]}
          />
        ))}
      </StyledList>
      <MoreLink>
        <a href="#">View More...</a>
      </MoreLink>
    </>
  );
}

const StyledList = styled.ul`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    columns: 2;
    max-width: 600px;
  }
  @media (min-width: 768px) {
    /* columns: 3; */
  }
`;

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
`;
