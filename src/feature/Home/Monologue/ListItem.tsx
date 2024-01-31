import styled from 'styled-components';
import {NodeData} from './Index';

interface ListItemProps {
  data: NodeData;
}

export default function ListItem({data}: ListItemProps): JSX.Element {
  return (
    <Link>
      <Text>{data.attributes.title}</Text>
      <Time dateTime="">{data.attributes.created}</Time>
    </Link>
  );
}

const Link = styled.a`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-of-type {
    margin-top: 0;
  }
`;

const Text = styled.span`
  font-size: 13px;
`;

const Time = styled.time`
  padding-left: 24px;
  color: #2e444eb9;
  font-size: 12px;
`;
