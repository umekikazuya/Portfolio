import {FaDrupal} from 'react-icons/fa6';
import styled from 'styled-components';

interface IntroductionProps {
  Text: string | undefined;
}

export default function Introduction({Text}: IntroductionProps): JSX.Element {
  if (!Text) return <></>;

  return (
    <>
      <ProfileText>
        <span>
          {Text}
          <ProfileIcon>
            <FaDrupal size={16} />
          </ProfileIcon>
        </span>
      </ProfileText>
    </>
  );
}

const ProfileText = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const ProfileIcon = styled.span`
  padding-left: 8px;
`;
