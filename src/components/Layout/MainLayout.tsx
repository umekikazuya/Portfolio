import styled from 'styled-components'
import Footer from './Footer'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <App>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </App>
  )
}

const App = styled.div`
  overflow-x: hidden;
`

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 1920px;
  padding: 40px 32px 28px;

  @media (min-width: 992px) {
    padding: 80px 52px 0px;
  }
`
