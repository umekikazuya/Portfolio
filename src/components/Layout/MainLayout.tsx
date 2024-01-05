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
  max-width: 120ch;
  padding: 5rem 3.33333rem 0px;

  /* media queries are no problem */
  @media (max-width: 62.5em) {
    padding: 5.55556rem 2rem 1.66667rem;
  }
`
