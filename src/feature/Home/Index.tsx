import { fetchData } from '@/utils/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface UserData {
  data: {
    attributes: {
      field_address: string | null;
      field_display_name: string | null;
      field_display_short_name: string | null;
      field_from: string | null;
      field_github: string | null;
      field_introduction: string | null;
      field_job: string | null;
      field_like: Array<string>;
      field_qiita: string | null;
      field_skill: Array<string>;
      field_summary_introduction: string | null;
      field_zenn: string | null;
    };
  };
}

export default function Index(): JSX.Element {
  // Set useState.
  const [user, setUser] = useState<UserData | null>(null);

  // User's Endpoint.
  const ENDPOINT_USERDATA = `${import.meta.env.VITE_DRUPAL_API
    }/jsonapi/user/user/${import.meta.env.VITE_DRUPAL_USER_UUID}`;

  // Fetch.
  useEffect(() => {
    fetchData<UserData>(ENDPOINT_USERDATA)
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        // No script.
      });
  }, []);

  return (
    <>
      <Container>
        <Profile>
          <Name>
            <NameEn>{user?.data.attributes.field_display_name}</NameEn>
            <NameJa>{user?.data.attributes.field_display_short_name}</NameJa>
          </Name>
          {user?.data.attributes.field_job ? (
            <Item>
              <ItemLabel>Job</ItemLabel>
              <ItemText>{user?.data.attributes.field_job}</ItemText>
            </Item>
          ) : (
            ''
          )}
          {user?.data.attributes.field_address ? (
            <Item>
              <ItemLabel>Address</ItemLabel>
              <ItemText>{user?.data.attributes.field_address}</ItemText>
            </Item>
          ) : (
            ''
          )}
          {user?.data.attributes.field_from ? (
            <Item>
              <ItemLabel>From</ItemLabel>
              <ItemText>{user?.data.attributes.field_from}</ItemText>
            </Item>
          ) : (
            ''
          )}
          {user?.data.attributes.field_skill?.length ? (
            <Item>
              <ItemLabel>Skill</ItemLabel>
              <ItemValues>
                {user?.data.attributes.field_skill.map((o, i) => (
                  <ItemValue key={i}>{o}</ItemValue>
                ))}
              </ItemValues>
            </Item>
          ) : (
            ''
          )}
          {user?.data.attributes.field_like?.length ? (
            <Item>
              <ItemLabel>Like</ItemLabel>
              <ItemValues>
                {user?.data.attributes.field_like.map((o, i) => (
                  <ItemValue key={i}>{o}</ItemValue>
                ))}
              </ItemValues>
            </Item>
          ) : (
            ''
          )}
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
  max-width: 270px;
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
  backdrop-filter: blur(8px);

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
  font-size: 28px;
  font-weight: 500;
  color: #868c9b;
  text-shadow: 0 4px 4px #b8b8b8;
`;

const NameJa = styled.div`
  font-size: 16px;
  color: #868c9b;
  text-shadow: 0 4px 4px #b8b8b8;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ItemLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #868c9b;
  text-shadow: 0 4px 4px #b8b8b8;
`;

const ItemText = styled.div`
  padding-left: 8px;
  font-size: 16px;
  color: #868c9b;
  text-shadow: 0 4px 4px #b8b8b8;
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
  color: #868c9b;
`;
