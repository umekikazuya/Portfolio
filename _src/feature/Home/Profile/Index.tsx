import {FaRegUser} from 'react-icons/fa6';
import {fetchData} from '@/utils/api';
import {SectionTitle} from '@/components/Parts/Title';
import {useEffect, useState} from 'react';
import Links from './Links';
import Introduction from './Introduction';

interface UserData {
  data: {
    attributes: {
      field_display_name: string | undefined;
      field_github: string | undefined;
      field_introduction: string | undefined;
      field_qiita: string | undefined;
      field_summary_introduction: string | undefined;
      field_zenn: string | undefined;
    };
  };
}

export default function Index(): JSX.Element {
  // Set useState.
  const [user, setUser] = useState<UserData | null>(null);

  // Set icon for title.
  const TitleIcon = FaRegUser;

  // User's Endpoint.
  const ENDPOINT_USERDATA = `${
    import.meta.env.VITE_DRUPAL_API
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
      <section>
        <SectionTitle
          Icon={TitleIcon}
          Text="Profile"
        />
        <Introduction Text={user?.data.attributes.field_summary_introduction} />
        <Links
          Github={user?.data.attributes.field_github}
          Qiita={user?.data.attributes.field_qiita}
          Zenn={user?.data.attributes.field_zenn}
        />
      </section>
    </>
  );
}
