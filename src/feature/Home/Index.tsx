// import Monologue from './Monologue/Index';
// import Notebook from './Notebook/Index';
// import Profile from './Profile/Index';

import styled from 'styled-components';

export default function Index(): JSX.Element {
  return (
    <>
      <Container>
        <Profile>
          <Name>
            <NameEn>Kazuya Umeki</NameEn>
            <NameJa>うめきかずや</NameJa>
          </Name>
          <Item>
            <ItemLabel>
              Job
            </ItemLabel>
            <ItemText>Web Creator</ItemText>
          </Item>
          <Item>
            <ItemLabel>
              Address
            </ItemLabel>
            <ItemText>Okayama, Japan.</ItemText>
          </Item>
          <Item>
            <ItemLabel>
              Skill
            </ItemLabel>
            <ItemValues>
              <ItemValue>PHP</ItemValue>
              <ItemValue>Drupal</ItemValue>
              <ItemValue>JavaScript</ItemValue>
            </ItemValues>
          </Item>
          <Item>
            <ItemLabel>
              Likes
            </ItemLabel>
            <ItemText>Okayama, Japan.</ItemText>
          </Item>
        </Profile>
        <ComingSoon>
          <CSHeading>Comming soon...</CSHeading>
          <CSBody>もう少し待ってね</CSBody>
        </ComingSoon>
      </Container>
      {/* <Profile />
      <Monologue />
      <Notebook /> */}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 100px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const ComingSoon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  flex: auto;
  background-color: rgba(255, 255, 255, 10%);
  border-radius: 100px;
  box-shadow: 0px 1px 4px 1px#B8B8B8;
  backdrop-filter: blur(40px);  
  @media (min-width: 992px) {
    display: flex;
  }
`;

const CSHeading = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 100%);
`;

const CSBody = styled.div`
  /* font-size: 30px; */
  /* font-weight: 600; */
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 100%);
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const NameEn = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #868C9B;
  text-shadow: 0 2px 4px #B8B8B8;
`;

const NameJa = styled.div`
  font-size: 16px;
  color: #868C9B;
  text-shadow: 0 4px 4px #B8B8B8;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ItemLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #868C9B;
  text-shadow: 0 4px 4px #B8B8B8;
`;

const ItemText = styled.div`
  padding-left: 8px;
  font-size: 16px;
  color: #868C9B;
  text-shadow: 0 4px 4px #B8B8B8;
`;

const ItemValues = styled.div`
  padding-left: 8px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
`;

const ItemValue = styled.div`
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 30%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 50%);
  backdrop-filter: blur(10px);
  color: #868C9B;
`;
