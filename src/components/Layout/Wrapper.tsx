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
  padding: 48px 24px;
  box-shadow: 0 2px 4px #7a7a7a;
  background-color: rgb(255, 255, 255, 10%);
  backdrop-filter: blur(10px);

  @media (min-width: 992px) {
    padding: 48px 100px;
    background-color: transparent;
    backdrop-filter: unset;
  }
`;

const Circle = styled.div`
  position: fixed;
  left: -20%;
  top: 60%;
  background-image: linear-gradient(#f2e0ff, #efdefb, #f2f2f2);
  border-radius: 50%;
  width: 560px;
  height: 560px;
`;

const Circle02 = styled.div`
  position: fixed;
  right: -10%;
  top: -20%;
  background-image: linear-gradient(#fae5af, #f9e8bd, #f6f2e7);
  border-radius: 50%;
  width: 480px;
  height: 480px;
`;
