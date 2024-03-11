import styled from 'styled-components';
import Header from './Header';

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({children}: WrapperProps): JSX.Element {
  return (
    <App>
      <Container>
        <Header />
        {children}
      </Container>
      <Circle />
      <Circle02 />
    </App>
  );
}

const App = styled.div`
  position: relative;
  overflow-x: hidden;
  padding: 32px;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  border: 1px solid #fff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 48px 100px;
  box-shadow: 0 2px 4px #7a7a7a;

  @media (min-width: 992px) {
    // No script.
  }
`;

const Circle = styled.div`
  position: absolute;
  left: -20%;
  bottom: -60%;
  background-image: linear-gradient(#F2E0FF, #EFDEFB, #F2F2F2);
  border-radius: 50%;
  width: 560px;
  height: 560px;
`;

const Circle02 = styled.div`
  position: absolute;
  right: -10%;
  top: -20%;
  background-image: linear-gradient(#FAE5AF, #F9E8BD, #F6F2E7);
  border-radius: 50%;
  width: 560px;
  height: 560px;
`;
