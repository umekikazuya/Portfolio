import {IconType} from 'react-icons';
import styled from 'styled-components';

interface SectionTitleProps {
  Icon: IconType;
  Text: string;
}

export function SectionTitle({Icon, Text}: SectionTitleProps): JSX.Element {
  return (
    <>
      <TitleArea>
        <TitleLogo>
          <Icon
            size={56}
            color="#2e444e"
          />
        </TitleLogo>
        {Text ? <TitleText>{Text}</TitleText> : ''}
      </TitleArea>
    </>
  );
}

export const TitleArea = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: max-content;
`;
export const TitleLogo = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 56px;
  text-align: center;
`;

export const TitleText = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
