import styled from 'styled-components'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <App>
      <Wrapper>{children}</Wrapper>
    </App>
  )
}

const App = styled.div`
  overflow-x: hidden;
`

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 1920px;
  padding: 80px 52px 0px;

  /* media queries are no problem */
  @media (max-width: 1000px) {
    padding: 88px 32px 28px;
  }
`
