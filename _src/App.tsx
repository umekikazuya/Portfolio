import {Analytics} from '@vercel/analytics/react';
import './index.css';
import {Outlet} from 'react-router';
import Wrapper from './components/Layout/Wrapper';

export default function Index() {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Analytics />
    </>
  );
}
